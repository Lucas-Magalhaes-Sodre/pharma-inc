import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    padding: 64px 0px;

    input{
        padding: 4px 10px;
    }
    input:hover{
        opacity: 80%;
        background: var(--input);
    }

    table {
        width: 50%;
        border: 1px solid black;
        table-layout: fixed;
        text-align: center;
        background: var(--gray-dark);
        margin: 20px 0px;
        
        thead {
            background: var(--gray);
        }

        tbody {
            tr:nth-child(even) {
                background-color: var(--gray-light);
            }
        }
    }
    .buttonLoading{
            background: var(--green);
            border-color: var(--green);
            padding: 5px 5px;
        }
        .buttonLoading:hover{
            opacity: 90%;
        }
`;

