import { useRef, useEffect } from 'react';
import {
  Clock as e,
  PerspectiveCamera as t,
  Scene as i,
  WebGLRenderer as s,
  SRGBColorSpace as n,
  MathUtils as o,
  Vector2 as r,
  Vector3 as a,
  MeshPhysicalMaterial as c,
  ShaderChunk as h,
  Color as l,
  Object3D as m,
  InstancedMesh as d,
  PMREMGenerator as p,
  SphereGeometry as g,
  AmbientLight as f,
  PointLight as u,
  ACESFilmicToneMapping as v,
  Raycaster as y,
  Plane as w,
} from "three";
import { RoomEnvironment as z } from "three/examples/jsm/environments/RoomEnvironment.js";

class x {
  #e;
  canvas;
  camera;
  cameraMinAspect;
  cameraMaxAspect;
  cameraFov;
  maxPixelRatio;
  minPixelRatio;
  scene;
  renderer;
  #t;
  size = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  render = this.#i;
  onBeforeRender = () => { };
  onAfterRender = () => { };
  onAfterResize = () => { };
  #s = false;
  #n = false;
  isDisposed = false;
  #o;
  #r;
  #a;
  #c = new e();
  #h = { elapsed: 0, delta: 0 };
  #l;
  constructor(e) {
    this.#e = { ...e };
    this.#m();
    this.#d();
    this.#p();
    this.resize();
    this.#g();
  }
  #m() {
    this.camera = new t();
    this.cameraFov = this.camera.fov;
  }
  #d() {
    this.scene = new i();
  }
  #p() {
    if (this.#e.canvas) {
      this.canvas = this.#e.canvas;
    } else if (this.#e.id) {
      this.canvas = document.getElementById(this.#e.id);
    } else {
      console.error("Three: Missing canvas or id parameter");
    }
    this.canvas.style.display = "block";
    const e = {
      canvas: this.canvas,
      powerPreference: "high-performance",
      ...(this.#e.rendererOptions ?? {}),
    };
    this.renderer = new s(e);
    this.renderer.outputColorSpace = n;
  }
  #g() {
    if (!(this.#e.size instanceof Object)) {
      window.addEventListener("resize", this.#f.bind(this));
      if (this.#e.size === "parent" && this.canvas.parentNode) {
        this.#r = new ResizeObserver(this.#f.bind(this));
        this.#r.observe(this.canvas.parentNode);
      }
    }
    this.#o = new IntersectionObserver(this.#u.bind(this), {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });
    this.#o.observe(this.canvas);
    document.addEventListener("visibilitychange", this.#v.bind(this));
  }
  #y() {
    window.removeEventListener("resize", this.#f.bind(this));
    this.#r?.disconnect();
    this.#o?.disconnect();
    document.removeEventListener("visibilitychange", this.#v.bind(this));
  }
  #u(e) {
    this.#s = e[0].isIntersecting;
    this.#s ? this.#w() : this.#z();
  }
  #v() {
    if (this.#s) {
      document.hidden ? this.#z() : this.#w();
    }
  }
  #f() {
    if (this.#a) clearTimeout(this.#a);
    this.#a = setTimeout(this.resize.bind(this), 100);
  }
  resize() {
    let e, t;
    if (this.#e.size instanceof Object) {
      e = this.#e.size.width;
      t = this.#e.size.height;
    } else if (this.#e.size === "parent" && this.canvas.parentNode) {
      e = this.canvas.parentNode.offsetWidth;
      t = this.canvas.parentNode.offsetHeight;
    } else {
      e = window.innerWidth;
      t = window.innerHeight;
    }
    this.size.width = e;
    this.size.height = t;
    this.size.ratio = e / t;
    this.#x();
    this.#b();
    this.onAfterResize(this.size);
  }
  #x() {
    this.camera.aspect = this.size.width / this.size.height;
    if (this.camera.isPerspectiveCamera && this.cameraFov) {
      if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
        this.#A(this.cameraMinAspect);
      } else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
        this.#A(this.cameraMaxAspect);
      } else {
        this.camera.fov = this.cameraFov;
      }
    }
    this.camera.updateProjectionMatrix();
    this.updateWorldSize();
  }
  #A(e) {
    const t = Math.tan(o.degToRad(this.cameraFov / 2)) / (this.camera.aspect / e);
    this.camera.fov = 2 * o.radToDeg(Math.atan(t));
  }
  updateWorldSize() {
    if (this.camera.isPerspectiveCamera) {
      const e = (this.camera.fov * Math.PI) / 180;
      this.size.wHeight =
        2 * Math.tan(e / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    } else if (this.camera.isOrthographicCamera) {
      this.size.wHeight = this.camera.top - this.camera.bottom;
      this.size.wWidth = this.camera.right - this.camera.left;
    }
  }
  #b() {
    this.renderer.setSize(this.size.width, this.size.height);
    this.#t?.setSize(this.size.width, this.size.height);
    let e = window.devicePixelRatio;
    if (this.maxPixelRatio && e > this.maxPixelRatio) {
      e = this.maxPixelRatio;
    } else if (this.minPixelRatio && e < this.minPixelRatio) {
      e = this.minPixelRatio;
    }
    this.renderer.setPixelRatio(e);
    this.size.pixelRatio = e;
  }
  get postprocessing() {
    return this.#t;
  }
  set postprocessing(e) {
    this.#t = e;
    this.render = e.render.bind(e);
  }
  #w() {
    if (this.#n) return;
    const animate = () => {
      this.#l = requestAnimationFrame(animate);
      this.#h.delta = this.#c.getDelta();
      this.#h.elapsed += this.#h.delta;
      this.onBeforeRender(this.#h);
      this.render();
      this.onAfterRender(this.#h);
    };
    this.#n = true;
    this.#c.start();
    animate();
  }
  #z() {
    if (this.#n) {
      cancelAnimationFrame(this.#l);
      this.#n = false;
      this.#c.stop();
    }
  }
  #i() {
    this.renderer.render(this.scene, this.camera);
  }
  clear() {
    this.scene.traverse((e) => {
      if (
        e.isMesh &&
        typeof e.material === "object" &&
        e.material !== null
      ) {
        Object.keys(e.material).forEach((t) => {
          const i = e.material[t];
          if (i !== null && typeof i === "object" && typeof i.dispose === "function") {
            i.dispose();
          }
        });
        e.material.dispose();
        e.geometry.dispose();
      }
    });
    this.scene.clear();
  }
  dispose() {
    this.#y();
    this.#z();
    this.clear();
    this.#t?.dispose();
    this.renderer.dispose();
    this.isDisposed = true;
  }
}

const b = new Map(),
  A = new r();
let R = false;
function S(e) {
  const t = {
    position: new r(),
    nPosition: new r(),
    hover: false,
    onEnter() { },
    onMove() { },
    onClick() { },
    onLeave() { },
    ...e,
  };
  (function (e, t) {
    if (!b.has(e)) {
      b.set(e, t);
      if (!R) {
        document.body.addEventListener("pointermove", M);
        document.body.addEventListener("pointerleave", L);
        document.body.addEventListener("click", C);
        R = true;
      }
    }
  })(e.domElement, t);
  t.dispose = () => {
    const t = e.domElement;
    b.delete(t);
    if (b.size === 0) {
      document.body.removeEventListener("pointermove", M);
      document.body.removeEventListener("pointerleave", L);
      R = false;
    }
  };
  return t;
}
function M(e) {
  A.x = e.clientX;
  A.y = e.clientY;
  for (const [elem, t] of b) {
    const i = elem.getBoundingClientRect();
    if (D(i)) {
      P(t, i);
      if (!t.hover) {
        t.hover = true;
        t.onEnter(t);
      }
      t.onMove(t);
    } else if (t.hover) {
      t.hover = false;
      t.onLeave(t);
    }
  }
}
function C(e) {
  A.x = e.clientX;
  A.y = e.clientY;
  for (const [elem, t] of b) {
    const i = elem.getBoundingClientRect();
    P(t, i);
    if (D(i)) t.onClick(t);
  }
}
function L() {
  for (const t of b.values()) {
    if (t.hover) {
      t.hover = false;
      t.onLeave(t);
    }
  }
}
function P(e, t) {
  const { position: i, nPosition: s } = e;
  i.x = A.x - t.left;
  i.y = A.y - t.top;
  s.x = (i.x / t.width) * 2 - 1;
  s.y = (-i.y / t.height) * 2 + 1;
}
function D(e) {
  const { x: t, y: i } = A;
  const { left: s, top: n, width: o, height: r } = e;
  return t >= s && t <= s + o && i >= n && i <= n + r;
}

const { randFloat: k, randFloatSpread: E } = o;
const F = new a();
const I = new a();
const O = new a();
const V = new a();
const B = new a();
const N = new a();
const _ = new a();
const j = new a();
const H = new a();
const T = new a();

class W {
  constructor(e) {
    this.config = e;
    this.positionData = new Float32Array(3 * e.count).fill(0);
    this.velocityData = new Float32Array(3 * e.count).fill(0);
    this.sizeData = new Float32Array(e.count).fill(1);
    this.center = new a();
    this.#R();
    this.setSizes();
  }
  #R() {
    const { config: e, positionData: t } = this;
    this.center.toArray(t, 0);
    for (let i = 1; i < e.count; i++) {
      const s = 3 * i;
      t[s] = E(2 * e.maxX);
      t[s + 1] = E(2 * e.maxY);
      t[s + 2] = E(2 * e.maxZ);
    }
  }
  setSizes() {
    const { config: e, sizeData: t } = this;
    t[0] = e.size0;
    for (let i = 1; i < e.count; i++) {
      t[i] = k(e.minSize, e.maxSize);
    }
  }
  update(e) {
    const { config: t, center: i, positionData: s, sizeData: n, velocityData: o } = this;
    let r = 0;
    if (t.controlSphere0) {
      r = 1;
      F.fromArray(s, 0);
      F.lerp(i, 0.1).toArray(s, 0);
      V.set(0, 0, 0).toArray(o, 0);
    }
    for (let idx = r; idx < t.count; idx++) {
      const base = 3 * idx;
      I.fromArray(s, base);
      B.fromArray(o, base);
      B.y -= e.delta * t.gravity * n[idx];
      B.multiplyScalar(t.friction);
      B.clampLength(0, t.maxVelocity);
      I.add(B);
      I.toArray(s, base);
      B.toArray(o, base);
    }
    for (let idx = r; idx < t.count; idx++) {
      const base = 3 * idx;
      I.fromArray(s, base);
      B.fromArray(o, base);
      const radius = n[idx];
      for (let jdx = idx + 1; jdx < t.count; jdx++) {
        const otherBase = 3 * jdx;
        O.fromArray(s, otherBase);
        N.fromArray(o, otherBase);
        const otherRadius = n[jdx];
        _.copy(O).sub(I);
        const dist = _.length();
        const sumRadius = radius + otherRadius;
        if (dist < sumRadius) {
          const overlap = sumRadius - dist;
          j.copy(_).normalize().multiplyScalar(0.5 * overlap);
          H.copy(j).multiplyScalar(Math.max(B.length(), 1));
          T.copy(j).multiplyScalar(Math.max(N.length(), 1));
          I.sub(j);
          B.sub(H);
          I.toArray(s, base);
          B.toArray(o, base);
          O.add(j);
          N.add(T);
          O.toArray(s, otherBase);
          N.toArray(o, otherBase);
        }
      }
      if (t.controlSphere0) {
        _.copy(F).sub(I);
        const dist = _.length();
        const sumRadius0 = radius + n[0];
        if (dist < sumRadius0) {
          const diff = sumRadius0 - dist;
          j.copy(_.normalize()).multiplyScalar(diff);
          H.copy(j).multiplyScalar(Math.max(B.length(), 2));
          I.sub(j);
          B.sub(H);
        }
      }
      if (Math.abs(I.x) + radius > t.maxX) {
        I.x = Math.sign(I.x) * (t.maxX - radius);
        B.x = -B.x * t.wallBounce;
      }
      if (t.gravity === 0) {
        if (Math.abs(I.y) + radius > t.maxY) {
          I.y = Math.sign(I.y) * (t.maxY - radius);
          B.y = -B.y * t.wallBounce;
        }
      } else if (I.y - radius < -t.maxY) {
        I.y = -t.maxY + radius;
        B.y = -B.y * t.wallBounce;
      }
      const maxBoundary = Math.max(t.maxZ, t.maxSize);
      if (Math.abs(I.z) + radius > maxBoundary) {
        I.z = Math.sign(I.z) * (t.maxZ - radius);
        B.z = -B.z * t.wallBounce;
      }
      I.toArray(s, base);
      B.toArray(o, base);
    }
  }
}

class Y extends c {
  constructor(e) {
    super(e);
    this.uniforms = {
      thicknessDistortion: { value: 0.1 },
      thicknessAmbient: { value: 0 },
      thicknessAttenuation: { value: 0.1 },
      thicknessPower: { value: 2 },
      thicknessScale: { value: 10 },
    };
    this.defines.USE_UV = "";
    this.onBeforeCompile = (e) => {
      Object.assign(e.uniforms, this.uniforms);
      e.fragmentShader =
        "\n        uniform float thicknessPower;\n        uniform float thicknessScale;\n        uniform float thicknessDistortion;\n        uniform float thicknessAmbient;\n        uniform float thicknessAttenuation;\n      " +
        e.fragmentShader;
      e.fragmentShader = e.fragmentShader.replace(
        "void main() {",
        "\n        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {\n          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));\n          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;\n          #ifdef USE_COLOR\n            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;\n          #else\n            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;\n          #endif\n          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;\n        }\n\n        void main() {\n      "
      );
      const t = h.lights_fragment_begin.replaceAll(
        "RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",
        "\n          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);\n        "
      );
      e.fragmentShader = e.fragmentShader.replace("#include <lights_fragment_begin>", t);
      if (this.onBeforeCompile2) this.onBeforeCompile2(e);
    };
  }
}

const X = {
  count: 200,
  colors: [0, 0, 0],
  ambientColor: 16777215,
  ambientIntensity: 1,
  lightIntensity: 200,
  materialParams: {
    metalness: 0.5,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.15,
  },
  minSize: 0.5,
  maxSize: 1,
  size0: 1,
  gravity: 0.5,
  friction: 0.9975,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true
};

const U = new m();


// New BallpitMesh class: renders each ball as a separate Mesh with its own texture
class Z extends m {
  constructor(e, t = {}) {
    super();
    const i = { ...X, ...t };
    this.config = i;
    this.physics = new W(i);
    this.balls = [];
    this.textures = t.textures || [];
    this.ambientLight = new f(i.ambientColor, i.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new u(i.colors[0], i.lightIntensity);
    this.add(this.light);
    // Create each ball as a Mesh with its own texture
    for (let idx = 0; idx < i.count; idx++) {
      const geometry = new g();
      const matParams = { ...i.materialParams };
      if (this.textures.length > 0) {
        const texIdx = Math.floor(Math.random() * this.textures.length);
        const tex = this.textures[texIdx];
        if (tex) {
          tex.minFilter = tex.magFilter = 1006; // THREE.LinearFilter
          tex.anisotropy = 8;
          tex.needsUpdate = true;
        }
        matParams.map = tex;
      } else if (Array.isArray(i.colors) && i.colors.length > 1) {
        // Use color gradient if no textures
        const tColor = new l();
        const ratio = idx / i.count;
        const scaled = Math.max(0, Math.min(1, ratio)) * (i.colors.length - 1);
        const cIdx = Math.floor(scaled);
        const start = new l(i.colors[cIdx]);
        if (cIdx >= i.colors.length - 1) {
          tColor.copy(start);
        } else {
          const alpha = scaled - cIdx;
          const end = new l(i.colors[cIdx + 1]);
          tColor.r = start.r + alpha * (end.r - start.r);
          tColor.g = start.g + alpha * (end.g - start.g);
          tColor.b = start.b + alpha * (end.b - start.b);
        }
        matParams.color = tColor;
      }
      const material = new Y(matParams);
      const mesh = new d(geometry, material, 1);
      this.add(mesh);
      this.balls.push(mesh);
    }
  }
  update(e) {
    this.physics.update(e);
    for (let idx = 0; idx < this.balls.length; idx++) {
      const mesh = this.balls[idx];
      U.position.fromArray(this.physics.positionData, 3 * idx);
      // Remove mouse-following ball: always show all balls
      U.scale.setScalar(this.physics.sizeData[idx]);
      U.updateMatrix();
      mesh.setMatrixAt(0, U.matrix);
      mesh.instanceMatrix.needsUpdate = true;
      if (idx === 0) this.light.position.copy(U.position);
    }
  }
}

function createBallpit(e, t = {}) {
  const i = new x({
    canvas: e,
    size: "parent",
    rendererOptions: { antialias: true, alpha: true },
  });
  let s;
  i.renderer.toneMapping = v;
  i.camera.position.set(0, 0, 20);
  i.camera.lookAt(0, 0, 0);
  i.cameraMaxAspect = 1.5;
  i.resize();
  initialize(t);
  const n = new y();
  const o = new w(new a(0, 0, 1), 0);
  const r = new a();
  let c = false;
  const h = S({
    domElement: e,
    onMove() {
      n.setFromCamera(h.nPosition, i.camera);
      i.camera.getWorldDirection(o.normal);
      n.ray.intersectPlane(o, r);
      s.physics.center.copy(r);
      s.config.controlSphere0 = true;
    },
    onLeave() {
      s.config.controlSphere0 = false;
    },
  });
  function initialize(e) {
    if (s) {
      i.clear();
      i.scene.remove(s);
    }
    s = new Z(i.renderer, e);
    i.scene.add(s);
  }
  i.onBeforeRender = (e) => {
    if (!c) s.update(e);
  };
  i.onAfterResize = (e) => {
    s.config.maxX = e.wWidth / 2;
    s.config.maxY = e.wHeight / 2;
  };
  return {
    three: i,
    get spheres() {
      return s;
    },
    setCount(e) {
      initialize({ ...s.config, count: e });
    },
    togglePause() {
      c = !c;
    },
    dispose() {
      h.dispose();
      i.dispose();
    },
  };
}


const Ballpit = ({ className = '', followCursor = true, textures = [], ...props }) => {
  const canvasRef = useRef(null);
  const spheresInstanceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (textures && textures.length > 0) {
      import('three').then(({ TextureLoader }) => {
        const loader = new TextureLoader();
        Promise.all(textures.map(url => new Promise(resolve => {
          loader.load(url, tex => resolve(tex), undefined, () => resolve(null));
        }))).then(loadedTextures => {
          spheresInstanceRef.current = createBallpit(canvas, { followCursor, ...props, textures: loadedTextures.filter(Boolean) });
        });
      });
    } else {
      spheresInstanceRef.current = createBallpit(canvas, { followCursor, ...props });
    }

    return () => {
      if (spheresInstanceRef.current) {
        spheresInstanceRef.current.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      className={`${className} w-full h-full`}
      ref={canvasRef}
    />
  );
};

export default Ballpit;
