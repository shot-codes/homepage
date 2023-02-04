<script lang="ts">
  import { useThrelte } from "@threlte/core";
  import { bustRotation } from "$lib/stores";
  import { Vector3 } from "three";

  const { pointer } = useThrelte();

  $: {
    bustRotation.set(new Vector3(0 - $pointer.y, 0 + $pointer.x, 0));
  }
</script>
