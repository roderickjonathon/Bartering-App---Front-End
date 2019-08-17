import React  from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase";




const SaleItem = (props) => {

    if(!props.saleItem){
        return "Loading..."
    }

    const url = "/saleitems/" + props.saleItem.id;


    // eslint-disable-next-line
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    //Function to bring back filename from database
    let newString =(str) =>{
        return str.replace("C:\\fakepath\\","")
    };
    let picUrl = `${newString(props.saleItem.img).toString()}`;


    // **** Firebase image retrieval **** //

    const displayImage = () => {
        let storage = firebase.storage();
        let storageRef = storage.ref();
        let downloadRef = storageRef.child('/images/' + picUrl);
        console.log("TESTTEST");
        // Get the download URL
        downloadRef.getDownloadURL().then(function (url) {
            // Insert url into an <img> tag to "download"
            let img = document.getElementById('myimg');
            img.src = url;
        }).catch(function (error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;

                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
    };


    return (

        <React.Fragment>

            <Link to={url} className='name'>{props.saleItem.itemName.capitalize()} in {props.saleItem.location.capitalize()} </Link>
            <p>Item: {props.saleItem.itemName.capitalize()}</p>

            <p>Pic:</p> <img id="myimg" src={displayImage()} alt="pic_image"/>
            <p>Looking for: {props.saleItem.barter.capitalize()}</p>
            <p>Description: {props.saleItem.description}</p>
            <p>Email user for barter: {props.saleItem.userEmail}</p>
        </React.Fragment>
    )
};

export default SaleItem;