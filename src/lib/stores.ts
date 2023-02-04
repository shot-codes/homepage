import { Vector3 } from "three";
import { writable } from "svelte/store";

export const bustRotation = writable(new Vector3(0, 0, 0));
