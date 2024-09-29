import { Layout, Menu, MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'nav 1',
    },
    {
        key: '2',
        label: 'nav 2',
    },
    {
        key: '3',
        label: 'nav 3',
        children: [
            {
                key: '4',
                label: 'nav 4',
            },
            {
                key: '5',
                label: 'nav 5',
            },
        ],
    },
]

const DashBoardLayout = () => {
  return (
    <Layout style={{height: "100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{height: '4rem', display:"flex", justifyContent: "center", alignItems: "center"}}>
            <h1><span style={{color: "#BAFE6D", fontWeight: "bold"}}>Bee</span>-<span style={{color: "#71ECB6", fontWeight: "bold"}}>Hive</span></h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,

            }}
          >
            <h1>The main content should go here</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
};

export default DashBoardLayout;
