import React from 'react';
import { Layout, Space } from 'antd';
import Thumbnail from '~/components/Thumbnail';
import Feature from '~/components/Features';
const { Footer, Sider, Content } = Layout;



const HomePage = () => {
    return (
        <Space
        direction="vertical"
        style={{
            width: '100%',
            height: '100%',
        }}
    >
        <Layout>
            <Sider style={{ backgroundColor: '#fff', padding: '65px 0' }}>
                <Feature
                    heading="Trạng thái"
                    feature1="Limited Edition"
                    feature2="Online Only"
                    feature3="Sale off"
                    feature4="New Arrival"
                />
                <Feature
                    heading="Kiểu dáng"
                    feature1="Low Top"
                    feature2="High Top"
                    feature3="Mid Top"
                    feature4="Mule"
                />
                <Feature
                    heading="Giá"
                    feature1="500-600k"
                    feature2="600-899k"
                    feature3="900-1200k"
                    feature4="1300-1500k"
                />
                <Feature
                    heading="Bộ sưu tập"
                    feature1="Jazico"
                    feature2="Track 6 I.S.E.E"
                    feature3="Soda Pop"
                    feature4="Landforms"
                />
            </Sider>
            <Layout>
                <Content style={{ backgroundColor: '#fff' }}>
                    <Thumbnail />
                </Content>
                <Footer style={{ backgroundColor: '#fff' }}>Footer</Footer>
            </Layout>
        </Layout>
        </Space>
    )
};
export default HomePage;
