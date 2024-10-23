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
          animationData: DefaultLottieLoader,
        }}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}

export default DefaultLoading;
