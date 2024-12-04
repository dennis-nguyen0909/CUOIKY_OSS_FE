import { Input } from "antd";
import styled from "styled-components";


export const WrapperDivStyle = styled.div`
    font-size:24px;
    margin-left:6px;
`
export const InputForm = styled(Input)`
    border-top:none;
    border-right:none;
    border-left:none;
    outline:none;
    margin:10px 0;

`
export const WrapperDivOrder = styled.div`
@media (max-width:767px){
    .orderPC{
        display:none;
    }
    .orderMobile{
        display:block;
    }
}
@media(min-width:767px){
    .orderMobile{
        display:none;
    }
}
`