import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILecture } from "../../../Constants/interface";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface IState {
  cart: ILecture[];
  status: "succeeded" | "loading" | "failed";
}

const initialState: IState = {
  cart: [],
  status: "succeeded",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.cart = action.payload;
      // state.cart = JSON.parse(useLocalStorage().getValue("cart") || "[]");
      return state;
    });
    builder.addCase(getCart.rejected, (state) => {
      state.status = "failed";
    });

    builder.addCase(addToCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.status = "succeeded";
      const lecture = action.payload;
      const stateFind = state.cart.find((item) => item.id === lecture.id);
      if (!stateFind) {
        state.cart.push(lecture);
        useLocalStorage().setValue("cart", JSON.stringify(state.cart));
        return;
      }
      alert("이 강좌는 이미 장바구니에 있습니다.");
    });
    builder.addCase(addToCart.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(removeFromCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.status = "succeeded";
      const id = action.payload;
      state.cart = state.cart.filter((item: ILecture) => item.id !== id);
      useLocalStorage().setValue("cart", JSON.stringify(state.cart));
      return state;
    });
    builder.addCase(removeFromCart.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(removeAllFromCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(removeAllFromCart.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.cart = action.payload;
      useLocalStorage().removeValue("cart");
      return state;
    });
    builder.addCase(removeAllFromCart.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(removeSelectedFromCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(removeSelectedFromCart.fulfilled, (state, action) => {
      state.cart = state.cart.filter((item) => !action.payload.some((selectedItem) => selectedItem.id === item.id));
      state.status = "succeeded";
      useLocalStorage().setValue("cart", JSON.stringify(state.cart));
      return state;
    });
  },
});

export const getCart = createAsyncThunk("cart/getCart", async () => {
  // hien tai dang chua co api nen return ve gia tri state
  // const { cart } = useSelector((state: RootState) => state.cart);
  const cart = JSON.parse(useLocalStorage().getValue("cart") || "[]");
  return cart;
});

export const addToCart = createAsyncThunk("cart/addToCart", async (lecture: ILecture) => {
  // hien tai dang chua co api nen return ve gia tri truyen vao
  return lecture;
});

export const removeFromCart = createAsyncThunk("cart/removeFromCart", (id: string) => {
  // hien tai dang chua co api nen return ve gia tri truyen vao
  return id;
});

export const removeSelectedFromCart = createAsyncThunk(
  "cart/removeSelectedFromCart",
  async (selectedItems: ILecture[]) => {
    // hien tai dang chua co api nen return ve gia tri truyen vao
    return selectedItems;
  }
);

export const removeAllFromCart = createAsyncThunk("cart/removeAllFromCart", async () => {
  // hien tai dang chua co api nen return ve gia tri truyen vao
  return initialState.cart;
});

export default cartSlice.reducer;
