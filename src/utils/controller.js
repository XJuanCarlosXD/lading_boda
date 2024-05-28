import { addDoc, collection, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../Firebase/firebase"
import { toast } from "react-hot-toast";

export class getData {
    ß
    constructor(id) {
        this.doc = doc(db, 'invitados', id)
    }

    listenLastesDevits(callback) {
        onSnapshot(this.doc, { includeMetadataChanges: true }, (res) => {
            const newDevits = res;
            return callback(newDevits)
        })
    }

    async handleOnUpdateDoc(params, message = 'Actualizada', icon = '✅') {
        await updateDoc(this.doc, params).then(() => {
            return toast.success(`${message} 😎`, {
                icon: icon,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        }).catch(error => {
            console.log('Ha ocurrido un error', error)
            return toast.error(`Ha ocurrido un error al Actualizar`, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        })
    }
}

export class getDatas {
    constructor() {
        this.doc = collection(db, 'invitados')
    }

    listenLastesDevits(callback) {
        onSnapshot(this.doc, { includeMetadataChanges: true }, (res) => {
            const newDevits = res;
            return callback(newDevits)
        })
    }

    async handleOnAddDocc(params, callback, message = 'Creada', icon = '✅') {
        await addDoc(this.doc, params).then((docRef) => {
            toast.success(`${message} 😎`, {
                icon: icon,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            return callback(docRef)
        }).catch(error => {
            toast.error(`Ha ocurrudo un error al guardar la informacion`, {
                icon: icon,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            return console.log('Ha ocurrudo un error', error)
        })
    }

}