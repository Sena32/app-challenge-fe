import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { FiCalendar, FiChevronLeft, FiChevronRight, FiHome, FiPower } from 'react-icons/fi';

// import logo from '@assets/images/logo-sidebar.svg';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  BtnCollapse,
  Link as LinkStyle,
  LinkBtn,
  LinkIcon
} from './styles';

interface SidebarProps {
  logout(): void
}

interface MenuItem {
  label: string
  redirectTo: string
  icon: string
}

const menu: MenuItem[] = [
  {
    label: 'Inicio',
    redirectTo: '/',
    icon: 'home'
  },
  {
    label: 'Meus Agendamentos',
    redirectTo: '/agendamentos',
    icon: 'calendar'
  }
]

function Sidebar(props: SidebarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const location = useLocation()
  
  function getCollapseStyle(classes: string) {
    return `${classes} ${collapsed ? 'collapsed' : ''}`
  }

  function isActive(path: string): boolean {
    return location.pathname === path
  }

  function getLinkCollapsedStyle(path: string): string {
    return `${collapsed ? '' : 'link'} ${isActive(path) ? 'active' : '' }`
  }

  function renderCollapseBtnIcon() {
    return collapsed
      ? <FiChevronRight size="16" />
      : <FiChevronLeft size="16" />
  }

  function renderMenuIcon(name: string): React.ReactNode {
    const map: {[key: string] : React.ReactNode } = {
      home: <FiHome className={getCollapseStyle('link-icon')} size="16"/>,
      calendar: <FiCalendar className={getCollapseStyle('link-icon')} size="16"/>
    }

    return map[name] || <></>
  }

  function renderMenu() {
    return (
      <IconContext.Provider value={{ color: '#c2cfe0' }}>
        {
          menu.map((item, index) => (
            <Link to={item.redirectTo} className={getLinkCollapsedStyle(item.redirectTo)} key={`menu-item-${index}`}>
              <button className={getCollapseStyle('link-btn')} >
                {renderMenuIcon(item.icon)}
                <label>{item.label}</label>
              </button>
            </Link>
          ))
        }
      </IconContext.Provider>
    )
  }

  return (
    <SidebarContainer className={getCollapseStyle('sidebar sidebar-container')} >
      <SidebarHeader className="sidebar-header"  onClick={() => setCollapsed(!collapsed)}>
        {/* <img src={logo} alt=""/> */}
        <BtnCollapse className={getCollapseStyle('btn-collapse')}>
          {renderCollapseBtnIcon()}
        </BtnCollapse>
      </SidebarHeader>

      <SidebarContent className={getCollapseStyle('sidebar-content')}>
        {renderMenu()}
      </SidebarContent>

      <SidebarFooter className={getCollapseStyle('sidebar-footer')}>
        <button className="logout" onClick={() => props.logout()}>
          <FiPower className="icon" size="16" />
          <label>Sair</label>
        </button>
      </SidebarFooter>
    </SidebarContainer>
  )
}

export default Sidebar
