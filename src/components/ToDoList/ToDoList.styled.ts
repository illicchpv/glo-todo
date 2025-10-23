import styled from "styled-components";

export const ToDoListContainer = styled.div`
    width: 100%;
    padding: 15px;
`

export const ToDoListFailed = styled.ul`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 0;
    list-style: none;

    &:empty:after {
        content: 'Нет задач на выполнение';
    }

    &:after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }
`
export const ToDoListCompleted = styled.ul`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 0;
    list-style: none;
    position: relative;

    &:empty:after {
        content: 'Нет выполненых задач';
    }

    :after {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #aaa;
    }
`
