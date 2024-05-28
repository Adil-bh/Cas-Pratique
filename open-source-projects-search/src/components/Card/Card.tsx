import styled from "styled-components";

export default function Card() {
    return (
        <CardStyled>
            <div className="container-top">
                <div className="logo">5 ⭐️</div>
                <h1 className="title">Repository Title</h1>
            </div>
            <hr />
            <div className="container-description">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ....</p>
            </div>
            <hr />
            <div className="container-tag">
                <p>javascript</p>
                <p>php</p>
                <p>dogs</p>
                <p>animals</p>
                <p>+</p>
            </div>
            <div className="container-footer">
                <div className="issues">❗ 67 issues</div>
                <div className="update">Updated 39min ago</div>
            </div>
        </CardStyled>
    )
}

// @TODO mettre container a la fin
const CardStyled = styled.div`
    border: 1px solid #E2E2E2;
    border-radius: 5px;
    height: 230px;
    width: 330px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    padding: 10px;
    box-sizing: border-box;

    .container-top {
        display: flex;
        align-items: center;
        height: 24px;
        margin-bottom: 20px;
        .logo {
            font-size: 16px;
        }

        .title {
            margin-left: 10px;
            font-size: 16px;
            font-weight: bold;
        }
    }

    hr {
        border: 0;
        border-top: 1px solid #E2E2E2;
        margin: 0;
    }

    .container-description {
        font-size: 12px;
        line-height: 1.5;
        height: 100px;
        overflow: hidden;
        margin-bottom: 10px;
        text-overflow: ellipsis;
    }

    .container-tag {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        p {
            padding: 2px 8px;
            background: #E2E2E2;
            border-radius: 5px;
            font-size: 10px;
        }
    }

    .container-footer {
        display: flex;
        justify-content: space-between;
        font-size: 10px;

        .issues {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
`;