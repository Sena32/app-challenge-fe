import React from 'react';
import {
  Container,
  Breadcrumb,
  Crumb,
  ArrowNext,
  ArrowBack,
  LinkItem,
  LinkActual,
} from './styles';

export type Item = {
  text: string;
  to?: any;
  isActive?: string;
};

export type Actived = {
  text: string;
  to?: any;
  isActive?: string;
};

export interface BreadcrumbProps {
  items?: Item[];
  itemActual?: Actived;
  isBack?: boolean;
  isNext?: boolean;
}

const BreadCrumb: React.FC<BreadcrumbProps> = ({
  items,
  itemActual,
  isBack,
  isNext,
}: BreadcrumbProps) => {
  return (
    <Container>
      {isBack && <ArrowBack />}
      <Breadcrumb>
        {items &&
          items.map(link => (
            <Crumb>
              <LinkItem to={link.to}>{link.text}</LinkItem>
              {isNext && <ArrowNext />}
            </Crumb>
          ))}

        <LinkActual to={itemActual && itemActual.to}>
          {itemActual && itemActual.text}
        </LinkActual>
      </Breadcrumb>
    </Container>
  );
};

export default BreadCrumb;
