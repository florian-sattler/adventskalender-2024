import type { Door, DoorNumbers } from "@/types";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

const readDoorsFromLocalStorage = (): Record<DoorNumbers[number], Door> => {
  const doors = localStorage.getItem("doors");
  if (doors) return JSON.parse(doors);

  return {
    "1": { door: "1", opened: false },
    "2": { door: "2", opened: false },
    "3": { door: "3", opened: false },
    "4": { door: "4", opened: false },
    "5": { door: "5", opened: false },
    "6": { door: "6", opened: false },
    "7": { door: "7", opened: false },
    "8": { door: "8", opened: false },
    "9": { door: "9", opened: false },
    "10": { door: "10", opened: false },
    "11": { door: "11", opened: false },
    "12": { door: "12", opened: false },
    "13": { door: "13", opened: false },
    "14": { door: "14", opened: false },
    "15": { door: "15", opened: false },
    "16": { door: "16", opened: false },
    "17": { door: "17", opened: false },
    "18": { door: "18", opened: false },
    "19": { door: "19", opened: false },
    "20": { door: "20", opened: false },
    "21": { door: "21", opened: false },
    "22": { door: "22", opened: false },
    "23": { door: "23", opened: false },
    "24": { door: "24", opened: false },
  };
};

export const useAppStore = defineStore("app", () => {
  const doorStates = ref<Record<DoorNumbers[number], Door>>(readDoorsFromLocalStorage());
  const doorVideoIds = ref<Record<DoorNumbers[number], string>>({
    "1": "dQw4w9WgXcQ",
    "2": "dQw4w9WgXcQ",
    "3": "dQw4w9WgXcQ",
    "4": "dQw4w9WgXcQ",
    "5": "dQw4w9WgXcQ",
    "6": "dQw4w9WgXcQ",
    "7": "dQw4w9WgXcQ",
    "8": "dQw4w9WgXcQ",
    "9": "dQw4w9WgXcQ",
    "10": "dQw4w9WgXcQ",
    "11": "dQw4w9WgXcQ",
    "12": "dQw4w9WgXcQ",
    "13": "dQw4w9WgXcQ",
    "14": "dQw4w9WgXcQ",
    "15": "dQw4w9WgXcQ",
    "16": "dQw4w9WgXcQ",
    "17": "dQw4w9WgXcQ",
    "18": "dQw4w9WgXcQ",
    "19": "dQw4w9WgXcQ",
    "20": "dQw4w9WgXcQ",
    "21": "dQw4w9WgXcQ",
    "22": "dQw4w9WgXcQ",
    "23": "dQw4w9WgXcQ",
    "24": "dQw4w9WgXcQ",
  });

  const foliageColors = ref<Record<DoorNumbers[number], string>>({
    "1": "#506a63",
    "2": "#517467",
    "3": "#517f6b",
    "4": "#50896f",
    "5": "#4f9372",
    "6": "#4d9e76",
    "7": "#506a63",
    "8": "#517467",
    "9": "#517f6b",
    "10": "#50896f",
    "11": "#4f9372",
    "12": "#4d9e76",
    "13": "#506a63",
    "14": "#517467",
    "15": "#517f6b",
    "16": "#50896f",
    "17": "#4f9372",
    "18": "#4d9e76",
    "19": "#506a63",
    "20": "#517467",
    "21": "#517f6b",
    "22": "#50896f",
    "23": "#4f9372",
    "24": "#4d9e76",
  });
  const trunkColors = ref<Record<DoorNumbers[number], string>>({
    "1": "#9a5d48",
    "2": "#7e4d46",
    "3": "#875247",
    "4": "#9a5d48",
    "5": "#a36248",
    "6": "#875247",
    "7": "#9a5d48",
    "8": "#754845",
    "9": "#905847",
    "10": "#905847",
    "11": "#7e4d46",
    "12": "#a36248",
    "13": "#875247",
    "14": "#905847",
    "15": "#754845",
    "16": "#a36248",
    "17": "#9a5d48",
    "18": "#754845",
    "19": "#754845",
    "20": "#7e4d46",
    "21": "#a36248",
    "22": "#905847",
    "23": "#7e4d46",
    "24": "#875247",
  });

  const doorNames = computed<DoorNumbers>(() => {
    return Object.keys(doorStates.value).map((door) => door) as DoorNumbers;
  });

  watch(
    doorStates,
    () => {
      localStorage.setItem("doors", JSON.stringify(doorStates.value));
    },
    { deep: true },
  );

  const canOpenDoor = (door: DoorNumbers[number]): boolean => {
    if (doorNames.value.length > 0) return true;
    if (!doorStates.value[door]) return false;

    // check if a door can be opened by date
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();
    const requestedDay: number = +door;

    if (currentYear < 2024) return false;
    if (currentYear === 2024 && currentMonth < 11) return false;
    if (currentYear === 2024 && currentMonth === 11 && currentDay < requestedDay) return false;

    return true;
  };

  return { doorStates, doorVideoIds, doorNames, canOpenDoor, foliageColors, trunkColors };
});
