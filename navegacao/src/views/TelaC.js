import React from 'react';
import TextCentral from '../components/TextoCentral';

export default props =>{
    const route = props.routes || {params: { numero: 0}}

    return (
        <TextCentral corFundo="#9932cd">
            Tela C = {route.params.numero}
        </TextCentral>
    );
} 


