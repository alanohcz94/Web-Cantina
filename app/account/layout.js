import SideNavigation from "@/app/_components/SideNavigation";

export const metadata = {
  title: "Account",
};

const Layout = ({children}) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
        < SideNavigation />
        <div>{children}</div>
    </div>
  )
}

export default Layout