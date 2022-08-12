import React, { useEffect } from "react";

import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";
import AppIndex from "./AppIndex";

export default function App() {
  return (
    <DataLayer initialState={initialState} reducer={reducer}>
      <AppIndex />
    </DataLayer>
  );
}
