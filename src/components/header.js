import React from 'react';

function Header(props) {
    return(
        <div class="header">
        <div id="name">{props.nama}</div>
        <div id="id_admin">{props.nim}</div>
    </div>
    )

}

export default Header