import styled from "styled-components"

export const Title = () => {
    return (
        <TitleStyled>
            <div className="title-box">
                <div className="title-container">
                    <h1>Open-source projects search</h1>
                </div>
                <hr />
            </div>

        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    .title-box {
        margin-bottom: 22px;
    }
    .title-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 250px;
        height: 56px;
        margin-top: 51px;
        margin-bottom: 6px;
        
    }

    h1 {
        text-align:center;
        text-transform: uppercase;
        font-size: 24px;
        margin-top: 0px;
    }

    hr {
        width: 175px;
        border-style: solid;
        border-width: 0.75px;
    }
`