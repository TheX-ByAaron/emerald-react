import React from "react";

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false, errorInfo: null}
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    render(){
        if(this.state.hasError){
            return( 
                <div className="h-screen w-full grid content-center justify-items-center">
                    hello there 
                </div> 
            )
        }

        return this.props.children;
    }
}