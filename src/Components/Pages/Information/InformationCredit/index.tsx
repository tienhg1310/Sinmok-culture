import React from 'react';
import Information from '..';
import InformationCreditHeader from './components/InformationCreditHeader';
import "../styles/InformationCredit.scss";
import Tab from '../components/Tab';
import dataTab from './data/dataTab';
import data5F from './data/data5F';
import data6F from './data/data6F';


export default function InformationCredit() {
    return (
        <Information>
            <InformationCreditHeader />
            <Tab
                data={dataTab}
                title="B1F"
                label="name"
                subTitle="sub_title"
                description="description"
                imgList="image_list"
            />
            <Tab
                data={data5F}
                title="5F"
                label="name"
                subTitle="sub_title"
                description="description"
                imgList="image_list"
            />
            <Tab
                data={data6F}
                title="6F"
                label="name"
                subTitle="sub_title"
                description="description"
                imgList="image_list"
            />
        </Information>
    )
}
