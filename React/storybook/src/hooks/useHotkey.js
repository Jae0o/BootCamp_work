import { useCallback, useEffect, useMemo } from "react";

const MidifierBitMasks = {
  alt: 1,
  ctrl: 2,
  meta: 4,
  shift: 8,
};

const getKeyCombo = (e) => {
  const key = e.key !== " " ? e.key.toLowerCase() : "space";

  let modifiers = 0;
  if (e.altkey) modifiers += MidifierBitMasks.alt;
  if (e.ctrlkey) modifiers += MidifierBitMasks.ctrl;
  if (e.metakey) modifiers += MidifierBitMasks.meta;
  if (e.shiftkey) modifiers += MidifierBitMasks.shift;

  return { modifiers, key };
};

const ShiftKeys = {
  "~": "`",
  "!": "1",
  "@": "2",
  "#": "3",
  $: "4",
  "%": "5",
  "^": "6",
  "&": "7",
  "*": "8",
  "(": "9",
  ")": "0",
  _: "-",
  "+": "=",
  "{": "[",
  "}": "]",
  "|": "\\",
  ":": ";",
  '"': "'",
  "<": ",",
  ">": ".",
  "?": "/",
};

const Aliases = {
  win: "meta",
  window: "meta",
  cmd: "meta",
  command: "meta",
  esc: "escape",
  opt: "alt",
  options: "alt",
};

const parseKeyCombo = (combo) => {
  const pieces = combo.replace(/\s/g, "").toLowerCase().split("+");
  let modifiers = 0;
  let key;
  for (const piece of pieces) {
    if (MidifierBitMasks[piece]) {
      modifiers += MidifierBitMasks[piece];
    } else if (ShiftKeys[piece]) {
      modifiers += MidifierBitMasks.shift;
      key = ShiftKeys[piece];
    } else if (Aliases[piece]) {
      key = Aliases[piece];
    } else {
      key = piece;
    }
  }

  return { modifiers, key };
};

const comboMatches = (a, b) => {
  return a.modifiers === b.modifiers && a.key === b.key;
};

const useHotkey = (hotkeys) => {
  const localKeys = useMemo(() => hotkeys.filter((k) => !k.global), [hotkeys]);
  const globalKeys = useMemo(() => hotkeys.filter((k) => k.global), [hotkeys]);

  const invokeCallback = useCallback(
    (global, combo, callbackName, e) => {
      for (const hotkey of global ? globalKeys : localKeys) {
        if (comboMatches(parseKeyCombo(hotkey.combo), combo)) {
          hotkey[callbackName] && hotkey[callbackName](e);
        }
      }
    },
    [localKeys, globalKeys]
  );

  const globalKeyDownHandle = useCallback(
    (e) => {
      invokeCallback(true, getKeyCombo(e), "onKeyDown", e);
    },
    [invokeCallback]
  );
  const globalKeyUpHandle = useCallback(
    (e) => {
      invokeCallback(true, getKeyCombo(e), "onKeyUp", e);
    },
    [invokeCallback]
  );
  const localKeyDownHandle = useCallback(
    (e) => {
      invokeCallback(false, getKeyCombo(e.nativeEvent), "onKeyDown", e.nativeEvent);
    },
    [invokeCallback]
  );
  const localKeyUpHandle = useCallback(
    (e) => {
      invokeCallback(false, getKeyCombo(e.nativeEvent), "onKeyUp", e.nativeEvent);
    },
    [invokeCallback]
  );

  useEffect(() => {
    document.addEventListener("keydown", globalKeyDownHandle);
    document.addEventListener("keyup", globalKeyUpHandle);

    return () => {
      document.removeEventListener("keydown", globalKeyDownHandle);
      document.removeEventListener("keyup", globalKeyUpHandle);
    };
  }, [globalKeyDownHandle, globalKeyUpHandle]);

  return { handleKeyDown: localKeyDownHandle, handleKeyUp: localKeyUpHandle };
};
export default useHotkey;
