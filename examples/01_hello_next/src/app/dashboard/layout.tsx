interface DashboardLayoutProps {
  children: React.ReactNode
  goods: React.ReactNode
  team: React.ReactNode
}

export default function DashboardLayout({ children, goods, team }: DashboardLayoutProps) {
  return (
    <div>
      {children}
      {goods}
      {team}
    </div>
  )
}
