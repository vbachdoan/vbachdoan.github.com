import React from 'react'

export default class Banner extends React.Component{
    render(){
        return(
            <>
                <div id="wrap-banner">
                    <div id="form-contact">
                        <h1 class="banner__form__title">ABOUT ME</h1>
                        <p id="banner__form__paragraph">
                            I'm Front-End developer,<br/>
                            Contact me everywhen if you need for help.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}