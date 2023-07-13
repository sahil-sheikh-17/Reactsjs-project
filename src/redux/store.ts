import { configureStore } from "@reduxjs/toolkit";
import recentSearchReducer from "./slices/recentSearchSlice";
import tradingDataReducer from "./slices/tradeDataSlice";
import tradingGraphDataReducer from "./slices/tradeGraphSlice";
import watchlistGraphDataReducer from "./slices/watchlistSlice";
import closeMarketDataReducer from "./slices/closeMarketSlice";
import optionStrategyReducer from "./slices/optionStrategySlice";
import optionGreekReducer from "./slices/optionGreekSlice";
// import { graphData } from "./slices/tradeGraphSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    searchStock: recentSearchReducer,
    tradeData: tradingDataReducer,
    tradeGraphData: tradingGraphDataReducer,
    watchlistGraphData: watchlistGraphDataReducer,
    closeMarketGraphData: closeMarketDataReducer,
    optionStrategySelection: optionStrategyReducer,
    optionGreek: optionGreekReducer,
    // [graphData.reducerPath]: graphData.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(graphData.middleware),
  // devTools: process.env.NODE_ENV !== "production",
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
