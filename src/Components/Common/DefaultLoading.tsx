import Lottie from "react-lottie";
import DefaultLottieLoader from "../../assets/Lottie/DefaultLottieLoader.json";

function DefaultLoading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
          animationData: DefaultLottieLoader,
        }}
        width={"50%"}
        height={"50%"}
      />
    </div>
  );
}

export default DefaultLoading;
