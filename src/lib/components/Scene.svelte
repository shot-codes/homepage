<script lang="ts">
  import { Canvas, OrbitControls, T, Pass } from "@threlte/core";
  import Bust from "./Bust.svelte";
  import { FilmPass } from "three/addons/postprocessing/FilmPass";
</script>

<div class="absolute w-full h-full">
  <Canvas>
    <Pass pass={new FilmPass(200, 1, 100, false)} />
    <T.PerspectiveCamera makeDefault position={[0, 1, 20]} fov={5}>
      <OrbitControls target={{ y: 1.1 }} />
    </T.PerspectiveCamera>

    <T.DirectionalLight position={[7, 20, 10]} color={0xfff} intensity={0.03} />
    <T.DirectionalLight
      position={[-7, 1, 10]}
      color={0xfff}
      intensity={0.001}
    />
    <T.DirectionalLight position={[7, 1, -10]} color={0xfff} intensity={0.01} />
    <T.AmbientLight intensity={1} />

    <Bust />
  </Canvas>
</div>
