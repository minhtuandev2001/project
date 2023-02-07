import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

export default function App() {
    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyB-iFaqEcPJTDEr5Fh7C6Jt_JMzQ3jDomc",
            authDomain: "upload-e5600.firebaseapp.com",
            databaseURL: "https://upload-e5600-default-rtdb.firebaseio.com",
            projectId: "upload-e5600",
            storageBucket: "upload-e5600.appspot.com",
            messagingSenderId: "793149210999",
            appId: "1:793149210999:web:02a20937d7f92acf09a172",
            measurementId: "G-Z4TQTVLYEG"
        };
        // firebase.initializeApp(firebaseConfig);
        if (!firebase.apps.length) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            // const analytics = getAnalytics(app);
            console.log('ket noi thanh cong roi');
            // getDatabase();
        }
    }, []);
    let [selectedImage, setSelectedImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [vip, setVip] = useState('');

    function getDatabase() {
        firebase.database().ref('users/').on('value', function (snapshot) {
            let array = [];
            snapshot.forEach(function (item) {
                var childData = item.val();
                array.push({
                    id: item.key,
                    name: childData.name,
                    email: childData.email,
                    password: childData.password,
                    status: childData.status,
                    avatar: childData.avatar,
                });
            });
            setData(array);
            // console.log(array);
        });
    }
    function addDatabase(params) {
        firebase.database().ref('users/').push().set({
            uri: params,
        }, function (error) {
            if (error) {
                alert('error ' + error);
            } else {
                alert('success');
            }
        });
    }
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        console.log(pickerResult);
        console.log(pickerResult.uri);
        setSelectedImage({ localUri: pickerResult.uri });
        if (pickerResult.uri != '') {
            const base64 = await FileSystem.readAsStringAsync(pickerResult.uri, { encoding: 'base64' });
            console.log(base64);
            setVip(base64);
            addDatabase(base64);
        }
    };
    if (selectedImage !== null) {
        return (
            <View>
                <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
                <Image source={{ uri: vip }} style={styles.logo} />
                <TouchableOpacity onPress={() => uploadImage}>
                    <Text>upload</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const uploadImage = async () => {
        const blob = await Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            }
            xhr.onerror = function () {
                reject(new TypeError('Network error failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', selectedImage.localUri, true);
            xhr.send(null);
        });



        const ref = Firebase.storage().ref().child(new Date().toISOString());
        ref.put(blob);


        snapshot.on(Firebase.storage.TaskEvent.STATE_CHANGED, () => {
            setUploading(true);
        },
            (error) => {
                setUploading(false)
                console.log(error);
                blob.close();
                return
            },
            () => {
                snapshot.snapshot.ref.getDownloadURL().then((url) => {
                    setUploading(false)
                    console.log("download url: " + url);
                    blob.close();
                    return url;
                })
            }
        )
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'data:image/jpeg;base64,UklGRtgYAABXRUJQVlA4IMwYAACQawCdASqPAc8APm0wlkikIqIhI7Iq6IANiWlu4XPxG/OH8a/2ns6/r35Oed/4t8l/avy4/tftR/3fgN8t/f/836C/xr7B/bv7p+1v+A9m/934L/DT+Y9QX8i/mv+R/tf4venr/a9qDr/+g9AL19+if67/D/uf/fvRY/wP7f+Gfwb+e/1z/J+4B/Hv6d/lv7n+9X9++av9P4Iv2z/R/9b3A/5d/a/+v/mPdZ/of+9/l/85+1Ptx/Pv8r/4f83/nPkJ/m39l/53+A9uL2aejb+6RLnvkJEusxqiJwzk1/FpSx13For0H5knaoWsp2Q+xeiN1GFNctHd0B3Q8T07GapHC7NzO830W8EnJoezBsl3nRV7rqxGVFpVUO3XAmkmcCS1hFit4WgTJ3fF/S6tXxaVkd1Sw/F5tKabYL1xjnV/WUaEM9e4gQ79VdDfhK3QBGmYRxoWnMPsDY6CHa4PBO9mFyWmiNMuc8ZjpGIiKRMEx3wKUBXf/r4p5VltXe0cFJIspu2camASBRHKZ7hOxGMvgk5FhfneJlMYr4xycFUPFnKv3JH3HdEe6I90R4vYGdiBE6CXwRPHut1ZLoEXDdgsuj3RHuiPdESJVCftjgTunFTtpFF3FptNeobWAYjDcna9MPUDos4V5qlxJ+pOPHnp9mF+5YRk44gUdXwoUfvRLOTM8EhuCA6i8QUSHoiUPHTQuxxDwwZUEq2XNMQ6VQlypAIqk/8mILgrFvsDfYG+t04o99sB55xgVBxigN9gb7A32BvsDfYG+wN9gb4LOluGxQbpN1df6Nlkb9LmfZ6K179pWB5PJsNo4Eu7RgNAiB71WcoF686cR1SNixZaGWL2fh149J+tSmXizgKAC1Mc0d9CZN0Gr9hrr5NhaWqFWrTyG1L3CHcI7WNNN44PIHZLBPimFbUjAF3/m8daD2JOYyiHVjV3vt8V4nA3b2suIn/+zj5X9b5ddjzYYqWnH9TNxupYf41QGWd4Zcp/DtLVVUScCPdFgCxZRy721UGg24KElEQUSHokPREBDfNwMuVC0vsqMwfhEHock9veQ63pOCUSX2kgaKgUJCgK5NceBSHXUJ0amWYYBYxi2GLtB6JD0SHeCLKw85i0xRAHcp96tzfZkeiTsFUOPW4EbY22QLFrBxa4AAD+/5YzwtJx2jprTsND/GOam4YkSFovPGvIgTR5+QDijK8tS5LREKepEL2UAujXfj0e6XuI1RNU00NyOnS9Sp3BB7aNIm914T+ATyK/MVJxUaZNbBn6TI3iJiH6DHeiTsUNMQGjtLEpv2YSp1GbW/1bHSyMrknLIvbjaShrqQn3MxqytjOdJ2Sw9FQ2vMWO74tzp4uXr9TX9B5JkkND+7gkwktXtQKm0s71Ggc8FnbLY5JPck85nE15UMLjVQY7y2D1QUre+De031hBzM1ueNtpMnNF8nMp0OuJZ/lG+JUSwaVw50Kcj9WXx4T02yfOsgYhH/d1SevR5tXmuKib7j3fiRy9hS9lEP0LvffdC6RsKeInDJHZy9aYExz8FmLkamXE6zcQTnsGh0KegCQleQR4tTXc/Xz5niXxaD28pjAAIpgjjhBIaT/ngzxef8vS1nUbea5vzAgk3fxS89xNtY1xQb+KKf/TZZkHuz7r5jsZ+n+GD1jU3LXg1fB2a3vAq0QUE70q7Gt1D7aSJ4+aQNJtNnWZJ6QDxfO0StH+8jP6tbCCJTcgJK0B0obuz//xwIAL+j0RwquniimFquJ6XTYTGELyOIWPKKPGkAT+DXxTlNzrm5LER6nsDaXIkdzjjVzrGr8qz/eYKd5QjX4P+czm9HDmnyDmPxOcBPraN3FvmvrpHPujpw6zZFtux9JFxvdXWenxkDoqieghGDdQ+75AQPjM5CnQyz1MnK8hP3gKcpLFAIN+EZRI+l/yFDZ97hdAjaraPmk5utKMDI7cr0ndQ98QWCUd6lmWamSJPQ9HkazUjoqx2nKd+wU55JY0EjCusebYM3x042W4kduV//Pb/g6rIXkC/F6LJ3ZFfUEg03FYMlR7jWAAL1Kib+tBU3pxVRXaHzKQRXMA06dKlXJobGLCami3vgIWJtyuzxlxyTJhQ5T5UtD6fMUd0Qw1xmIRNk89RXHnY+YujV+1PqxZXcC7+V/8eJR1BlcZrROgYqxhRphJDR9Qe7swIRQWRysLKx76YMX4sd/twxxa1pnfXVCFnvnwAPyx6aBOosXYVeBzYVhSEddag3EI/Mg8Cgp5J02j7OB6+GA8sVMT/bzBv2gjA6TVjXHgHUrxxQAwqDT0cKZPBsHoxe8cZNUSKLEuKJ63vhe6I+s+d6009RfTwmbtb4lVkTaR1IOmq3xEfGkBWQSP0Uwq2BnSPZ6L9l4TpMWOZ7QVrJ6dN4wOCT4DTQn+K2i15t+1rzYRbg8Gvw7szgVJw3KLd7mkutycFjathWoCOwMbv3f8ms/B9Mi3lNyiWrCdIj9eu39Y2uX5pMdpNCslwB2uVsRXYjSOR0Yvly1SsF8kP58Z/ht5IvRNXA7OvnxZZeVsf60G8aOVghw1GcJejq8MPYBKm0FBtKqyq01uRf7//kauUE9DssxvUFTBqy92Sxyt8Zg9OR8zgWn6vsDu/4MWurbC1xJYhG5xh+xZQSniXb/s2iqb7setkG0pp0EKHDivsFTLLd4C/LLH17lmA+16vTfnNVLe1hQEcY8cikOmdcCv1dn/xb0/omF2dHu055Op4IhO65BED79pT/wNwF2bJI7E1RxX4/7bb2PYy9FdakLm4Msj8hre+JFemjg1kBwerF4Jqwc9GhP/lvLrTqvZ2RmmqlSaZLLeQZoT79/SXFT7kJ+MZ3GC1x+O7YsqY9roG4gLKwWicSNa5miJnXtzyJsTTEJuxaKWc+hnwDCcGmb5lgFiuG84+hsstZ9MHU+/fNK2qR913ZsNOfJHseX2t0yIW4g616aMB+IpLkjkRVsi2vgKps9Ubz9Wc5jnFnikqV/+sjcjLkqNMU3EhsiAUnlhfvTeyn74/5kI/xuZ2PBjmX7Nf4aEn4FWUKGpLsYFuSFENFEaGAyU2xI5nBLWQaILudK72o8zOOzQIpbJJMpZEHCG7LmyaeOt2dpHRJoDIivJWMsDOx8Sgq8j9P6a4Hor4h7LYXBmn07k4QRZzMzOiUZJmm1ykggP34r3/uaNQnPuTjT2/Gz2kaSv6Zc9aMQIHPDo4k65/FU/DuFn7Ooara764RWkrSDABSR9Y6uudiV7KVTg21wk9UyRFX0hL3HqkB3sA+gVPBkIE0lWBkIGnz8aKV8Nj0/71ZeP0T2Xtw85J49Bf1WP+LAYC0acYLX7/z8rQ8tEb7bkTwM7lbe4D5y0iFrQadkfA7i08tNKtX5FGrhk9ovnth6SvdhwX1oRYgovMZypD6PwEvgg5FxOSiC+6o2kvDdr2izh4gP6SKEMx/24OuTcr4TD+LXEVMLzIRVKAuJ0RJxYoBQghO364/9XM4rPzobGfrZpy4vmZ9C+agauozMR6hozVwb9rZPU4iLSGTA6oZMzepqoQAPGg6Q0kQsxWBBamQhIfioKnMU3cO+l63vasCinf/inRROOtgANlLuuLKtkl41hoa+llkkOzTfQh76t0vZ2uTHfppmP/4u4+IaE47Poeg8qvRhQgzX/IKelalBZ7T+sykI9SGzucpc1Oa+dQsAOZznDRWJOZSG5tdsqAQT0HDdYcQd/h4OPMKuWCccVOSReS7mW6l4WyS+3dDEAS1WHH+vd/i9lcmlkjx6pY4+TYrdg29N0/EatP4KuwhDyICpv+RF7TNHL7KaoATpUWydtwWMYaRwFkYw6Rb66zYYwYMc91UwrAqNr/aJYjHyHgiCevUk0D0IUU3LrsmEsf7MFK+dSdl1CjYX4RLEma9+PoI9G6twCKZfW7FtQ4TVzs4jTZ9aa2XT/hH31YysAZ0E9wwrlYSsbURKzVhvBYLSCVDEGFAjx4nS9aPWVyiSTl7/6b5IyqkmI7urQdEE1xgka9nT87CVoIgstRplzrBfFZ9BmPAQowgJTas2GTmlU3WrZ4+H4xI58mvR82GTJgkCjWIHnkxTiphYF08fGKJKecvt1jtO7BDhWq46YNNXdS7rO8q16KqeaO8thgC/udkAieChunT1GioaNf1L5ORmihwUOSfbFmFMjqODKtSpFg/HhxauR9wmy3GuWp/rOysWJIMaApUca7HeRqxv9PEweRjDCS42e5bXgni0E8GbVLGqwAbWxkJJdrNPT7zXzxXfEE3lUGOf1OVv42B5MPepCvyT4CVd9CA/A+7ZKXzyz11uj6zjsxQA/jhEslFAsppRP11fscfgYfV9U8C7w+tMnsNfjco1lqxt7pzvZlnfBmKg08BD9f+N2O1kEHrs2A+l7fysxlxRezEm1VO4Bs8V/5eLfFwJ3KZGpF/NLcAl+GyhofQecRT3NbzL1nYZWacrIZEVnM74cRpJF10OVWB7ZKHfCFXOEJh9po5Ah8PGpTyfzATCOyU0RnJ0Wv46TxZnftXZP0zTXCXVswr0ssyt5Q8g9PSCkbPVq8zx0UgkeGRanF6LZ0VVbQJ9/dDYi0URYVq+XTJrJ73ey/YCXfu3n0/aSyTksdLFQMIDAFmc57RPsR2rd/N/BvRRZbgKQfEHZVTo6IIBVNTz6/NLPbi5lU8TumclNhAX2XshkZO9NZMPnrBLXF9Bdy7fZkqOn/0xVCvRziKy7mEhfluDVEJFJf+NoMOJ2SCRC1Ba1WjG4t0zyMQsHIoH/uDGV90ewd4RLpPOjg1FQqcceWufSn9zBW9DNVL1GWsTXPF3gKMFu+d4HSXeFeqhjk1GsjqxeLIA3SaHfl7H3l//056OuoUu5WV8ZVp7onArI3ZbqtRDbPmG250yvxyyJaDWZX4YTeUOgmw6XoV9Gh5C9GqBIt9cPiVmhqUC5FalRq0fseI44d88GyvXObTY8P9rdzY/EDCDqpSoBh7rvSgI0thtaVa+fSR4vZLi3TqfJ3IPlVECpIWwakczbtQfakSMjj98QcyNS49uPM5qkLi3ech9R480vPMME/TCSOIXDyowh29GNxtALBDYowMkB5Nut5Hx6BAB/RGFcBBVsxEAcH+NTQqJrtXcPsCJ/eqAsp+cI3YB/Y6ZOhoNIjgN3UZ7Fdz0NGX842yfPCvJq2VCANyWffESX4CqsqlL5sLuwAAbJgfga5mxVrZG/e5CwKEO2375SgFgjlJCpmlfWw5oeTs0yzSWsFNUsSkKvbD7KxRQO0modzgR3CnvrnHNT1uMtCNnmPDD+S7OZpGWyY9jO1mUVMtY/jaftugH2iuL9wBs3pk1HtDBjazq4fh19la7Jo3jQGQOQidWTXZCEHcOpMdcCpLk4gZj8q4T9b8diMG/wUefz2tFI9EE8hyJGOe8tBp/tPnZ1vALDSkYqyMGwj6R1OhsD9CNi2Qsi15uy2mWmqIFi2lhzq3+lQq6hx3TPEZPIf95NErWiNcMIcGJlCjyh3ufwGS0CDnJ/pWlDVU0fjc98UpzgjY0xSMaD4LZKqiPV/Un6igWj9O6txMwqT2VdbiyT9yHlKHbkdQCWl0l2RhptTbgfRuFEnC2U48dWduK0KGUHPPfIQ1y/OicgXuf+VaHj7uEkYgYfwZAGHRe8VeZYhdCpBdFgXy/Q+K+bfAzWPoiy/eJ6ZEA+IophXu7RF2IH5Dpp1H0U9FP7lM11PLa3KrzFM+Y9O+tcPTbVww3ZqYWAycH4HEYlggvqaUvxqZg91MNMNO68yiq+oVejPot/Ejy/Ck5B62mKrCFViORcBmaMXJ+0lNtW8xs2zfcez4JYPEUk+QSG9AlSqNb6wb62+WOigmNJ3ssfQOEIRG3rPGbhGLVcWwijrt6otdnwqbNyHQoLY1VVA643Xlj2fOZuxTj6e/PAwU7a+WIeKNd/wxzK16tDLB3iwMmEPwJEnFTp1pI6sHktYHC4ie3V5wuiqN4aYsyYWIoAcxv39KtHVPFkjtKlJBWsmH0NbI/fLQ1ZrgAQaOJdQ+iFE+9tytJZIoIfQibhh34zOybLPdqooQZJ3XMnCrAe4FxpKhkUCE0cQN1J4ZDBG0jzZ8w3ipaYsGyproTG32EP4JdxrT2a8GFyfbAhbM9yUfUhN/ekn9nWHUwL86sf9G/dXZppQReVmB0kyNTq8wypio7S+k9UJ/WRLXYqjDT6TkbBsQbBOmySlv1KRnUyUP3pLDx7J2sd0NwiUIWjFXADHtF1c8Qrc4x2U2PKP1+Yyfl0K4nmr876uUyaMmTjidg2juA+pYdbkw7vm4ZEND1lvuIWJnqhOafRVFikQw5PfXLibbG23dJ2vs6JTmDym42Nyrq2q4S5ngEMVutnk7U9V3WIxfW1Q1LbBYH9yv/sX7qIGKzNj6n3+ygdBQVNNJlFfODuorovrC0GWlKBfeB+4u/H2Cc20uHer3QSuEljEi1jW/j5zqClm/R+HIFwqEcNnkDeeGRtonOl7rX21vO/PDV/a2F9xQtRJiKF3wxklT4Ls2nouL6bwYkCZFOdEGZRNQpPERWQcmc/wnjWhRNSB899nSqrLrsbWLke3qyK3xNdptR5zboef7swl4eU1DXZ+4vmES+hzBepEb/IDq3+mMNa1c3oL8YajRrPuN1CGGz4bQR/8qiNQ6+82cUmtxZzNsb6L6VlWawHLMAQt5KqCIoA9iJBLsFARW4lUCgH/+FYgTBgmMyJdhcksyGJN9jM3XlUnUkxg6AjeyH41Eo5BwFKDrX0U3OsrChyjsNL2TFJAFZj7dNuF6BdDQ4+EquTlnAG31iPy5kauf6x5PKvcZWNDx8/UtBpq5Z7Zb/9jAP/DzVwbbA0ZaprRnmTgTv+45VwAZjs3chmlyTMtaY/5WtxnDP3X968aPsRtF3PM0mONO9MyvGJ7vwN+AmcMzjiNi4RFUelBOuJagMweD3g7g79s2taXjIVflhncdOgO9ANAbhHn6Nblk+pY7GCVy9W7gSk8bJIWXnEqEP8o2ci6d7Hu+quOOlRnqL92vhRQHTgG4LTqcg5ODH8vu+G18Y6B7VTJkEwyJngUWivTFZK7FLj45FtLWReW16A11TjVzsP8AukIF6jw0tblW6ott2OwlX9lbaKaq7LXz1EVy4d57ZGAPKKIZ4nuAO8nulwflYW+nEpPYQiDCnGrnY/EexMnOWqmmWJCgsdfIqShdOV1chpvz3UulBmPCvFAkTim11GcPYEJKFrKyZxtN2h1za0tKDiiXj3xlEMlaO/dQNEgItHafQAoqRaZ9G/5IilaMS7EIbl2NXsuSCMkg78kNE+QJ7wAGbd4RMKMCgSc/xMwnC9OrFlXfzW522Tr/VJAFgDpEvgUF76wKnlM2Nh+3Nv8ymWP62Yw+QJKOipfGyaM8x8iHfEVmv2jY3Xj7mCy8gbrdWbCAEOWajmlL7p5M9lU59JTAh6BLK+8vEG22bfOuUvmyWCiBcPwpIl4W0MapTRizUNgFav7EUgz6wtRwnvb6u2H7+KtL+pryIvFkiLZ8zZJ0GRdCjoq+t21nVu8+znx+1jP//uwJ/LYbywmTAyiTkaoSWfelLnZRohe9rN2rUaPUq9Sbv6IpfxyImXu9oqouvKX2AwNpVrk3XOdeshR3Ie6cVe39dGf7XBTgdWqaQvo0moO0nDiMZVEctYZ8hWNn7aK1WPBQNtxlCt2h63ZP8JUAKHUchBclaYkwpLkLejzUAfOKiZyO/yvwthIDIwSoemDVoehlG1PlsVAr86cP0pb79MvHuxnvMJHsBjS9GYXvzZRR7jAGKBWYvys9B+XcAKKwFrbGYavvQ0sBouL0UWIPXgIxAafp3u3kGRUjc86sRENkge5t3pHRRaC3jh+fmArK0d1uBYTKfgzIgpCeqf1GigxTMo44+bDYaFimB8Kq2+3MoMTXHTL8jDnBZHkQctCQzGm8bb1BrPe+v/0UofrqKp40AXbaIQhZLwqUZ6QNe2QdxF8Y/CmvQxJTwhS5tNmCmbvp0+gZj3MavnmEc3Wjd3x4oyzGiWTZj0pP984thsNiEFd6qNxaFv1mWRo6gxdgKaVfut+ZVKShGn3krIdoGB3rZks0rh6JClapuYfyfbOh2+EzrXy4nK+qIsQq/Yx69V82XbAi5xixRfGqfaJmoP+kzefZ+/qW86IeK3ULoZywiT43W7EjD5UZ4PQsN28XoLPWP9Is4DUKOwrPZXZ0onLp7ReN8aKD4Rq5xOcjI6pS9eTqhMPuTrcT/yQAWLRM6dvEW7qb4Ydub65KjuxxO8suov6/9zXS/dn7zRkF/pqsSlwYlQ+xxsHYRDLPQLf+FlpP9P7AjCoMwq2womgPpIG25Q3Z8pO9Ve327HHJFve1Gvar+feIBuSSguh8UdnXCQ2HsbAH8eM+w4+qpYQ4S/XIEDdTR3wj1GHCEzqm2rKyQv7RNkZZsnEnShtjodOD3u4wWnWLgvhZbInVKwdYAAAAA=' }} style={styles.logo} />
            <Text style={styles.instructions}>
                To share a photo from your phone with a friend, just press the button below!
            </Text>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});
