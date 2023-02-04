<script lang="ts">
  import { Canvas, OrbitControls, T } from "@threlte/core";
  import MouseController from "./MouseController.svelte";
</script>

<div class="absolute w-full h-full">
  <Canvas>
    <MouseController />
    <T.PerspectiveCamera makeDefault position={[0, 1, 2]} fov={50}>
      <OrbitControls target={{ y: 1.1 }} />
    </T.PerspectiveCamera>

    <T.DirectionalLight castShadow position={[3, 10, 10]} />
    <T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
    <T.AmbientLight intensity={0.2} />

    <T.Mesh>
      <T.BoxGeometry args={[1, 1, 1]} />
      <T.MeshStandardMaterial />
    </T.Mesh>
  </Canvas>
</div>
