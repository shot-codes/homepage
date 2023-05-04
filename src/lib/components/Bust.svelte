<script lang="ts">
  import { T } from "@threlte/core";
  import { GLTF } from "@threlte/extras";
  import { spring } from "svelte/motion";
  import { Vector3 } from "three";
  import { bustRotation } from "$lib/stores";

  let rot = new Vector3(0, 0, 0);
  const rotSpring = spring([0, 0, 0]);
  $: {
    rotSpring.set([0 - $bustRotation.x / 2, 0 - $bustRotation.y / 2, 0]);
  }
  $: {
    rot.set($rotSpring[0], $rotSpring[1], $rotSpring[2]);
    rot = rot;
  }
</script>

<T.Group rotation={[rot.x, rot.y, rot.z]} position={[0, 0, 0]}>
  <GLTF
    url="/models/bust.gltf"
    scale={4}
    position={{ x: -0.1, y: -1 }}
    rotation={{ x: -0, y: 3.14, z: 0 }}
  />
</T.Group>
