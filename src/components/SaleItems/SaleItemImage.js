import React, {Component} from 'react';
import firebase from "firebase/app";


class SaleItemImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: "",
            saleItems: [],
            selectedFile: "",
            imgUrl: ""
        };
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    newString(str) {
        return str.replace("C:\\fakepath\\", "")
    }

    //Function to bring back filename from my database
    componentDidMount() {

        let currentComponent = this;
        const picName = `${this.newString(this.props.saleItem.img).toString()}`;
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const downloadRef = storageRef.child('/images/' + picName);
        downloadRef.getDownloadURL().then(function (url) {
            currentComponent.setState({
                imgUrl: url
            })
        });
    }


    render() {
        return (
            <div>
                <img id="image" className="component" src={this.state.imgUrl} alt="pic_image" width={200} height={200}/>
            </div>
        )
    }
}

export default SaleItemImage;