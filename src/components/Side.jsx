import {
  HiChartPie,
  HiArrowSmRight,
  HiInbox,
  HiTable,
  HiUser,
  HiViewBoards,
  HiShoppingBag,
} from "react-icons/hi";
import { Drawer, Sidebar } from "flowbite-react";

export default function Side({ isOpen, handleClose }) {
  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      className="fixed top-0 left-0 z-40 w-64 h-screen overflow-hidden transition-transform -translate-x-full sm:translate-x-0 shadow-xl "
    >
      <Drawer.Items>
        <Sidebar aria-label="Sidebar with logo branding example">
          <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
            Flowbite
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Kanban
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </Drawer.Items>
    </Drawer>
  );
}
