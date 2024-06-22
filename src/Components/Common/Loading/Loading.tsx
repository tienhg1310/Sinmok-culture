import "./Loading.scss"

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
