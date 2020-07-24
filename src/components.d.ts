/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AnchorLink {
        "to": string;
    }
    interface AppBurger {
    }
    interface AppIcon {
        "name": string;
    }
    interface CodeSnippet {
        "code": string;
        "language": string;
    }
    interface IonicIoSite {
    }
    interface IonicIoSiteFooter {
    }
    interface IonicIoSiteHeader {
    }
    interface IonicIoSiteRoutes {
    }
    interface LandingPage {
    }
    interface NewsletterForm {
    }
    interface SiteImg {
        "alt": string;
        "dimensions": string;
        "loading"?: "lazy";
        "name": string;
        "path": string;
        "type": string;
    }
}
declare global {
    interface HTMLAnchorLinkElement extends Components.AnchorLink, HTMLStencilElement {
    }
    var HTMLAnchorLinkElement: {
        prototype: HTMLAnchorLinkElement;
        new (): HTMLAnchorLinkElement;
    };
    interface HTMLAppBurgerElement extends Components.AppBurger, HTMLStencilElement {
    }
    var HTMLAppBurgerElement: {
        prototype: HTMLAppBurgerElement;
        new (): HTMLAppBurgerElement;
    };
    interface HTMLAppIconElement extends Components.AppIcon, HTMLStencilElement {
    }
    var HTMLAppIconElement: {
        prototype: HTMLAppIconElement;
        new (): HTMLAppIconElement;
    };
    interface HTMLCodeSnippetElement extends Components.CodeSnippet, HTMLStencilElement {
    }
    var HTMLCodeSnippetElement: {
        prototype: HTMLCodeSnippetElement;
        new (): HTMLCodeSnippetElement;
    };
    interface HTMLIonicIoSiteElement extends Components.IonicIoSite, HTMLStencilElement {
    }
    var HTMLIonicIoSiteElement: {
        prototype: HTMLIonicIoSiteElement;
        new (): HTMLIonicIoSiteElement;
    };
    interface HTMLIonicIoSiteFooterElement extends Components.IonicIoSiteFooter, HTMLStencilElement {
    }
    var HTMLIonicIoSiteFooterElement: {
        prototype: HTMLIonicIoSiteFooterElement;
        new (): HTMLIonicIoSiteFooterElement;
    };
    interface HTMLIonicIoSiteHeaderElement extends Components.IonicIoSiteHeader, HTMLStencilElement {
    }
    var HTMLIonicIoSiteHeaderElement: {
        prototype: HTMLIonicIoSiteHeaderElement;
        new (): HTMLIonicIoSiteHeaderElement;
    };
    interface HTMLIonicIoSiteRoutesElement extends Components.IonicIoSiteRoutes, HTMLStencilElement {
    }
    var HTMLIonicIoSiteRoutesElement: {
        prototype: HTMLIonicIoSiteRoutesElement;
        new (): HTMLIonicIoSiteRoutesElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLNewsletterFormElement extends Components.NewsletterForm, HTMLStencilElement {
    }
    var HTMLNewsletterFormElement: {
        prototype: HTMLNewsletterFormElement;
        new (): HTMLNewsletterFormElement;
    };
    interface HTMLSiteImgElement extends Components.SiteImg, HTMLStencilElement {
    }
    var HTMLSiteImgElement: {
        prototype: HTMLSiteImgElement;
        new (): HTMLSiteImgElement;
    };
    interface HTMLElementTagNameMap {
        "anchor-link": HTMLAnchorLinkElement;
        "app-burger": HTMLAppBurgerElement;
        "app-icon": HTMLAppIconElement;
        "code-snippet": HTMLCodeSnippetElement;
        "ionic-io-site": HTMLIonicIoSiteElement;
        "ionic-io-site-footer": HTMLIonicIoSiteFooterElement;
        "ionic-io-site-header": HTMLIonicIoSiteHeaderElement;
        "ionic-io-site-routes": HTMLIonicIoSiteRoutesElement;
        "landing-page": HTMLLandingPageElement;
        "newsletter-form": HTMLNewsletterFormElement;
        "site-img": HTMLSiteImgElement;
    }
}
declare namespace LocalJSX {
    interface AnchorLink {
        "to"?: string;
    }
    interface AppBurger {
        "onBurgerClick"?: (event: CustomEvent<any>) => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface CodeSnippet {
        "code"?: string;
        "language"?: string;
    }
    interface IonicIoSite {
    }
    interface IonicIoSiteFooter {
    }
    interface IonicIoSiteHeader {
    }
    interface IonicIoSiteRoutes {
    }
    interface LandingPage {
    }
    interface NewsletterForm {
    }
    interface SiteImg {
        "alt"?: string;
        "dimensions"?: string;
        "loading"?: "lazy";
        "name"?: string;
        "path"?: string;
        "type"?: string;
    }
    interface IntrinsicElements {
        "anchor-link": AnchorLink;
        "app-burger": AppBurger;
        "app-icon": AppIcon;
        "code-snippet": CodeSnippet;
        "ionic-io-site": IonicIoSite;
        "ionic-io-site-footer": IonicIoSiteFooter;
        "ionic-io-site-header": IonicIoSiteHeader;
        "ionic-io-site-routes": IonicIoSiteRoutes;
        "landing-page": LandingPage;
        "newsletter-form": NewsletterForm;
        "site-img": SiteImg;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anchor-link": LocalJSX.AnchorLink & JSXBase.HTMLAttributes<HTMLAnchorLinkElement>;
            "app-burger": LocalJSX.AppBurger & JSXBase.HTMLAttributes<HTMLAppBurgerElement>;
            "app-icon": LocalJSX.AppIcon & JSXBase.HTMLAttributes<HTMLAppIconElement>;
            "code-snippet": LocalJSX.CodeSnippet & JSXBase.HTMLAttributes<HTMLCodeSnippetElement>;
            "ionic-io-site": LocalJSX.IonicIoSite & JSXBase.HTMLAttributes<HTMLIonicIoSiteElement>;
            "ionic-io-site-footer": LocalJSX.IonicIoSiteFooter & JSXBase.HTMLAttributes<HTMLIonicIoSiteFooterElement>;
            "ionic-io-site-header": LocalJSX.IonicIoSiteHeader & JSXBase.HTMLAttributes<HTMLIonicIoSiteHeaderElement>;
            "ionic-io-site-routes": LocalJSX.IonicIoSiteRoutes & JSXBase.HTMLAttributes<HTMLIonicIoSiteRoutesElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "newsletter-form": LocalJSX.NewsletterForm & JSXBase.HTMLAttributes<HTMLNewsletterFormElement>;
            "site-img": LocalJSX.SiteImg & JSXBase.HTMLAttributes<HTMLSiteImgElement>;
        }
    }
}
