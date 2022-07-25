// // css없이 자체로 스타일 조정
// import React from "react";

// function Hello(){
//     const PracticeStyle = {
//         marginTop: '10px',
//         backgroundColor: 'blue',
//     };
//     return (
//     <>
//         <div style={PracticeStyle}>Hello World!</div>
//         <div style={PracticeStyle}>Hello World!</div>
//         <div style={PracticeStyle}>Hello World!</div>
//     </>
//     );
// }
// export default Hello;


// // css를 사용하여 스타일 조정
// import React from "react";
// import './Hello.css';


// function Hello(){
//     const PracticeStyle = {
//         marginTop: '10px',
//         backgroundColor: 'blue',
//     };
//     return (
//     <>
//         <div class='red'>Hello World!</div>
//         <div class='red'>Hello World!</div>
//         <div class='red'>Hello World!</div>
//     </>
//     );
// }
// export default Hello;


// styled-componenets를 사용하여 스타일 조정
import React from "react";
import styled from 'styled-components';


function Hello(){
    const StyledButton = styled.button`
        color:red;
        background-color:gray;
    `
    return (
        <StyledButton>나만의 버튼</StyledButton>
    );
}
export default Hello;
