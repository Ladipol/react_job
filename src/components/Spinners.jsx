import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "100 auto",
  };

const Spinners = (isloading) => {
    return (
            
          <ClipLoader
            color='#4338ca'
            isloading={isloading}
            cssOverride={override}
            size={150}
          />
    
      );
    }
export default Spinners