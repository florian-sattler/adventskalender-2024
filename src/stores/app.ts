import type { Door, DoorNumbers } from "@/types";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

const readDoorsFromLocalStorage = (): Record<DoorNumbers[number], Door> => {
  const doors = localStorage.getItem("doors-2024");
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
// other videos
// "_fX4qoruQik", // Venetian Snares - Szamar madar
// "SI76A2-LRe4", // Eraplee Noisewall Orchestra - Rave Of All Dead
// "yQr81GnKEIs", // Civilizing People · Nero's Day At Disneyland
// "pB-G3_k-ypg", // klangphonics harry potter techno
// "T0-rj9kIyb4", // Anton Webern - Two Songs
// const foliageColors = ["#506a63", "#517467", "#517f6b", "#50896f", "#4f9372", "#4d9e76"];
// const truncColors = ["#754845", "#7e4d46", "#875247", "#905847", "#9a5d48", "#a36248"];

export const useAppStore = defineStore("app", () => {
  const doorStates = ref<Record<DoorNumbers[number], Door>>(readDoorsFromLocalStorage());
  const doorVideoIds = ref<Record<DoorNumbers[number], string>>({
    "1": "AOwH4C9qESI", // MEZERG - How to play piano
    "2": "mqWuZH-PWt4", // 【炎上動画】交番の前で堂々と踊ってみた結果 #chinesedance #中国ダンス #ダンス動画
    "3": "UbQgXeY_zi4", // Caravan Palace - Lone Digger
    "4": "Nyx6SBixRE8", // Sleepless Night 🌙 [lofi hip hop]
    "5": "rAWIfId-17I", // Klangphonics - Sibling Techno
    "6": "l-rlFaSBLg8", // MEZERG - WELCOME THEREMIN
    "7": "5X9_M0VBfgw", // KLANGPHONICS - techno without a computer
    "8": "PBDTTOJvS1Y", // Harry Spotter 2 - The forbidden weight
    "9": "H8_BAoVwoaM", // Villalobos - Fizheuer Zieheuer
    "10": "bixtQAq2LzE", // KLANGPHONICS - Melodic Techno Set | Live from the Black Forest
    "11": "FbJ63spk48s", // Venetian Snares - Hajnal
    "12": "H8qrbwfhtn4", // Klangphonics - When Germans do Techno
    "13": "iCRmTiMZap4", // MEZERG & WAAGAL - FACTORY LIVE 4K
    "14": "sYKEiAIdwg8", // WHOLETONE REVOLUTION / Jankó - Darn That Dream
    "15": "ajM4vYCZMZk", // Ennio Morricone - The Ecstasy of Gold - Theremin & Voice
    "16": "IvUU8joBb1Q", // Wintergatan - Marble Machine
    "17": "RaZ3nGTnmhc", // Daisy La Fontaine - Bijoux Bisous
    "18": "03_SDwrCFDk", // The Ropes Our Nights Were Laid Across, Pulled Taut · Lauren Bousfield
    "19": "G5VMenGzgFk", // Klangphonics - "Perfect Opposure" is out now!
    "20": "n5ZNdSh2_WM", // Child Protective Services Theme Song · Nero's Day At Disneyland
    "21": "O7RG-B6N1Vw", // Lonely Days ☔ [sad lofi]
    "22": "OF_x-X8Fv6U", // Lauren Bousfield - Cracknight (Official Video)
    "23": "w2eW6jezNfU", // Harry Spotter - The boy who lifted
    "24": "q0EYJZAiIJU", // MEZERG - GARDEN JAM + WEDDING
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
      localStorage.setItem("doors-2024", JSON.stringify(doorStates.value));
    },
    { deep: true },
  );

  const canOpenDoor = (door: DoorNumbers[number]): boolean => {
    // check if debug=true is set via URL parameter
    const debug = new URLSearchParams(window.location.search).get("debug");
    if (debug === "true") return true;

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
