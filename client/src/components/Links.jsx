import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
    className: '',
})``;

const List = styled.div.attrs({
    className: 'navbar-nav ml-auto',
})``;

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse position-relative mx-4',
})`
  a {
     color: white;
     position: relative;
     overflow: hidden;
     font-size: 20px;
     font-weight: 500;

     &:hover {
          color: white;
     }

     &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 2px;
        content: "";
        display: block;
        height: 1px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }

      &:hover:after {
         width: 100%;
         left: 0;
      }
  }`;

const Links = () => {

        const scrollToHash = (target) => {

            if(document.getElementById(target)) {
                window.scroll({
                behavior: 'smooth',
                left: 0,
                top: (document.getElementById(target).offsetTop - 150)
                });
            } else {
                window.location.replace("/#" + target);
            }
        
        } 

        return (
            <React.Fragment>
                <Collapse>
                    <List>
                        <Item>
                            <Link onClick={() => scrollToHash('a-propos')} to="/" className="nav-link">
                                À propos
                            </Link>
                        </Item>
                        <Item>
                            <Link onClick={() => scrollToHash('le-voyage')} to="/" className="nav-link">
                                Le voyage
                            </Link>
                        </Item>
                        <Item>
                            <Link onClick={() => scrollToHash('prix')} to="/" className="nav-link">
                                Prix
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
}

export default Links;
