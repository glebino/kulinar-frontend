import React from "react";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";


const Home = () => {
    return (
        <>
        <Header />
        <Paragraph text={
            'Званый ужин у Яшки это топовый топ! Приходите с опозданием и игристым! Кленовые листья, застывшие в сиропе, баффоло чикен дип, глазированные в апельсиновом соусе овощи и лимонный тарт под аккомпонемент перекуров и любимых треков. Как дома, только фенси, как в ресторане, но дома, в окружении любимых людей и красот.'
        }
        position = {'absolute'}
        width = {'1280px'}
        maxWidth = {'75%'}
        mx={0}
        textAlign={'start'}
        />
        </>
    )
}

export default Home