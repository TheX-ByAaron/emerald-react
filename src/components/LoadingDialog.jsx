import Modal from 'react-modal';
import Lottie from 'react-lottie-player';


const LoadingDialog = (props) => {

    const height = props.height;
    const width = props.width;
    const style = props.EmeraldStyle;

    return(
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            className={`w-fit h-fit mx-auto my-auto p-5 outline-none 
            bg-primary-surface rounded-xl  ${style}`}
            overlayClassName="fixed inset-0 bg-primary-surface-black/60 
            sm:backdrop-blur-sm grid content-center justify-items-center" >

            <Lottie 
                loop={props.loop}
                play={props.play}
                animationData={props.animationData}
                style={{height: height, width: width}}
                />
        </Modal>
    )

}

export default LoadingDialog;