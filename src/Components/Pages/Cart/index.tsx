import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { AppDispatch, RootState } from "../../../Modules/store/store";
import { useNavigate } from "react-router-dom";
import { getCart, removeAllFromCart, removeSelectedFromCart } from "../../../Modules/store/slices/cartSlice";
import { useEffect, useState } from "react";
import { ILecture } from "../../../Constants/interface";

type Props = {};

const CartPage = (props: Props) => {
  const navigate = useNavigate();
  const { cart, status } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<ILecture[]>([]);

  const actionSelectedItems = (event: any, lecture: ILecture) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, lecture]);
    } else {
      setSelectedItems(selectedItems.filter((i) => i !== lecture));
    }
  };

  const actionCheckAllItems = (event: any) => {
    if (event.target.checked) {
      setSelectedItems(cart);
      setIsCheckAll(true);
    } else {
      setSelectedItems([]);
      setIsCheckAll(false);
    }
  };

  const actionRemoveSelectedFromCart = () => {
    window.confirm("선택한 강좌를 삭제하시겠습니까?") && dispatch(removeSelectedFromCart(selectedItems));
    setSelectedItems([]);
    setIsCheckAll(false);
  };

  const actionRemoveAllFromCart = () => {
    window.confirm("장바구니를 모두 비우시겠습니까?") && dispatch(removeAllFromCart());
    setSelectedItems([]);
    setIsCheckAll(false);
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="cart_wrapper">
      <div className="cart-title">
        <p>장바구니</p>
      </div>
      <div className="cart-container">
        <h2 className="container-title">장바구니</h2>
        <div className="container-desc">
          <p>수강신청 할 강좌를 선택 후 수강 결제하기를 클릭하시면 수강신청이 가능합니다.</p>
        </div>
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" checked={isCheckAll} onChange={actionCheckAllItems} />
                </th>
                <th>강좌정보</th>
                <th>강사</th>
                <th>수강료</th>
                <th>접수상태</th>
                <th>결제</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="td-center">
                    <input
                      type="checkbox"
                      checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
                      onChange={(e) => actionSelectedItems(e, item)}
                    />
                  </td>
                  <td className="lecture-info">
                    <img src={item.image_url} alt="" />
                    <div className="lecture-text">
                      <h3>{item.title}</h3>
                      <p>
                        {item.teacher} | {item.semester} | {item.date_range}
                      </p>
                      <p>{item.time}</p>
                    </div>
                  </td>
                  <td className="td-center">{item.teacher}</td>
                  <td className="td-center">{item.fee}</td>
                  <td className="td-center">
                    <button className="btn1">접수중</button>
                  </td>
                  <td className="td-center">
                    <button className="btn2" onClick={() => navigate(`/lecture/find?payment=${item.id}`)}>
                      결제하기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  <button onClick={actionRemoveSelectedFromCart}>선택강좌 삭제</button>
                  <button onClick={actionRemoveAllFromCart}>장바구니 비우기</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="button-view-more">
          <button onClick={() => navigate("/lecture/find")}>강좌 더보기</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
