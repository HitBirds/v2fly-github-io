(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{438:function(t,s,e){"use strict";e.r(s);var n=e(9),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"transport"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transport"}},[t._v("#")]),t._v(" Transport")]),t._v(" "),e("p",[t._v("The underlying transport mode (transport) is the way the current V2Ray node is connected to other nodes. The underlying transmission mode provides a stable data transmission channel. Generally speaking, a symmetrical transmission mode is required at both ends of a network connection. For example, if one end uses WebSocket, the other end must also use WebSocket, otherwise the connection cannot be established.")]),t._v(" "),e("p",[t._v("The underlying transport (transport) configuration is divided into two parts, one is global settings ("),e("a",{attrs:{href:"#transportobject"}},[t._v("TransportObject")]),t._v("), and the other is sub-protocol configuration ("),e("a",{attrs:{href:"#streamsettingsobject"}},[t._v("StreamSettingsObject")]),t._v("). Sub-protocol configuration can specify how each individual inbound and outbound protocol is transmitted. Generally speaking, the outbound and inbound protocols corresponding to the client and server need to use the same transmission method. When the sub-protocol transmission configuration specifies a transmission method, but does not fill in its settings, this transmission method will use the settings in the global configuration.")]),t._v(" "),e("h2",{attrs:{id:"transportobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transportobject"}},[t._v("#")]),t._v(" TransportObject")]),t._v(" "),e("p",[e("code",[t._v("TransportObject")]),t._v(" corresponds to the "),e("code",[t._v("transport")]),t._v(" item of the configuration file.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tcpSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kcpSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wsSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"quicSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dsSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("tcpSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/tcp.html"}},[t._v("TcpObject")])],1)]),t._v(" "),e("p",[t._v("Configuration for TCP connection.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("kcpSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/mkcp.html"}},[t._v("KcpObject")])],1)]),t._v(" "),e("p",[t._v("Configuration for mKCP connection.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("wsSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/websocket.html"}},[t._v("WebSocketObject")])],1)]),t._v(" "),e("p",[t._v("Configuration for WebSocket connection.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("httpSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/h2.html"}},[t._v("HttpObject")])],1)]),t._v(" "),e("p",[t._v("Configuration for HTTP/2 connection.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("quicSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/quic.html"}},[t._v("QuicObject")])],1)]),t._v(" "),e("p",[t._v("Configuration for QUIC connection.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("dsSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/domainsocket.html"}},[t._v("DomainSocketObject")])],1)]),t._v(" "),e("p",[t._v("Configuration for Domain Socket connection.")]),t._v(" "),e("h2",{attrs:{id:"streamsettingsobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#streamsettingsobject"}},[t._v("#")]),t._v(" StreamSettingsObject")]),t._v(" "),e("p",[e("code",[t._v("StreamSettingsObject")]),t._v(" corresponds to the "),e("code",[t._v("streamSettings")]),t._v(" item in the outbound inbound protocol. Each inbound and outbound connection can be configured with different transmission configurations, and you can set "),e("code",[t._v("streamSettings")]),t._v(" to configure some transmissions.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tlsSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tcpSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kcpSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wsSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"quicSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dsSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sockopt"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mark"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tcpFastOpen"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tproxy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("network")]),t._v(': "tcp" | "kcp" | "ws" | "http" | "domainsocket" | "quic"')])]),t._v(" "),e("p",[t._v("The network type used by the data stream, the default value is "),e("code",[t._v('"tcp"')])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("security")]),t._v(': "none" | "tls"')])]),t._v(" "),e("p",[t._v("Whether to enable transport layer encryption, the supported options are "),e("code",[t._v('"none"')]),t._v(" means no encryption (default value), and "),e("code",[t._v('"tls"')]),t._v(" means use "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security",target:"_blank",rel:"noopener noreferrer"}},[t._v("TLS"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("tlsSettings")]),t._v(": "),e("a",{attrs:{href:"#tlsobject"}},[t._v("TLSObject")])])]),t._v(" "),e("p",[t._v("TLS configuration. TLS is provided by Golang, supports TLS 1.3, does not support DTLS.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("tcpSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/tcp.html"}},[t._v("TcpObject")])],1)]),t._v(" "),e("p",[t._v("The TCP configuration of the current connection is only valid when the connection uses TCP. The configuration content is the same as the global configuration above.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("kcpSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/mkcp.html"}},[t._v("KcpObject")])],1)]),t._v(" "),e("p",[t._v("The mKCP configuration of the current connection is valid only when the connection uses mKCP. The configuration content is the same as the global configuration above.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("wsSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/websocket.html"}},[t._v("WebSocketObject")])],1)]),t._v(" "),e("p",[t._v("The WebSocket configuration of the current connection is valid only when this connection uses WebSocket. The configuration content is the same as the global configuration above.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("httpSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/h2.html"}},[t._v("HttpObject")])],1)]),t._v(" "),e("p",[t._v("The HTTP/2 configuration of the current connection is only valid when the connection uses HTTP/2. The configuration content is the same as the global configuration above.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("quicSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/quic.html"}},[t._v("QUICObject")])],1)]),t._v(" "),e("p",[t._v("The QUIC configuration of the current connection is only valid when the connection uses QUIC. The configuration content is the same as the global configuration above.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("dsSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/en_US/config/transport/domainsocket.html"}},[t._v("DomainSocketObject")])],1)]),t._v(" "),e("p",[t._v("The domain socket configuration of the current connection is valid only when this connection uses Domain socket. The configuration content is the same as the global configuration above.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("sockopt")]),t._v(": "),e("a",{attrs:{href:"#sockoptobject"}},[t._v("SockoptObject")])])]),t._v(" "),e("p",[t._v("Used as a transparent proxy configuration.")]),t._v(" "),e("h2",{attrs:{id:"tlsobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tlsobject"}},[t._v("#")]),t._v(" TLSObject")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serverName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2ray.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowInsecure"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alpn"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http/1.1"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificates"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disableSystemRoot"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("serverName")]),t._v(": string")])]),t._v(" "),e("p",[t._v("Specify the domain name of the server certificate, which is useful when the connection is established by IP. When the target connection is specified by a domain name, such as receiving a domain name when Socks is inbound, or a domain name detected by the sniffing function, this domain name will be automatically used for "),e("code",[t._v("serverName")]),t._v(" without manual configuration.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("alpn")]),t._v(": [ string ]")])]),t._v(" "),e("p",[t._v("An array of strings that specifies the ALPN value specified during the TLS handshake. The default value is "),e("code",[t._v('["h2", "http/1.1"]')]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("allowInsecure")]),t._v(": true | false")])]),t._v(" "),e("p",[t._v("Whether to allow insecure connections (only for clients). The default value is "),e("code",[t._v("false")]),t._v(". When the value is "),e("code",[t._v("true")]),t._v(", V2Ray will not check the validity of the TLS certificate provided by the remote host.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("disableSystemRoot")]),t._v(": true | false")])]),t._v(" "),e("p",[t._v("(V2Ray 4.18+) Whether to disable the CA certificate that comes with the operating system. The default value is "),e("code",[t._v("false")]),t._v(". When the value is "),e("code",[t._v("true")]),t._v(", V2Ray will only use the certificate specified in "),e("code",[t._v("certificates")]),t._v(" for TLS handshake. When the value is "),e("code",[t._v("false")]),t._v(", V2Ray will only use the CA certificate that comes with the operating system for TLS handshake.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("certificates")]),t._v(": [ "),e("a",{attrs:{href:"#certificateobject"}},[t._v("CertificateObject")]),t._v(" ]")])]),t._v(" "),e("p",[t._v("A list of certificates, where each item represents a certificate (fullchain is recommended).")]),t._v(" "),e("h3",{attrs:{id:"certificateobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#certificateobject"}},[t._v("#")]),t._v(" CertificateObject")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usage"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"encipherment"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificateFile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/certificate.crt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keyFile"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/key.key"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"certificate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----BEGIN CERTIFICATE-----"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MIICwDCCAaigAwIBAgIRAO16JMdESAuHidFYJAR/7kAwDQYJKoZIhvcNAQELBQAw"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ADAeFw0xODA0MTAxMzU1MTdaFw0xODA0MTAxNTU1MTdaMAAwggEiMA0GCSqGSIb3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DQEBAQUAA4IBDwAwggEKAoIBAQCs2PX0fFSCjOemmdm9UbOvcLctF94Ox4BpSfJ+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3lJHwZbvnOFuo56WhQJWrclKoImp/c9veL1J4Bbtam3sW3APkZVEK9UxRQ57HQuw"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OzhV0FD20/0YELou85TwnkTw5l9GVCXT02NG+pGlYsFrxesUHpojdl8tIcn113M5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pypgDPVmPeeORRf7nseMC6GhvXYM4txJPyenohwegl8DZ6OE5FkSVR5wFQtAhbON"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OAkIVVmw002K2J6pitPuJGOka9PxcCVWhko/W+JCGapcC7O74palwBUuXE1iH+Jp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noPjGp4qE2ognW3WH/sgQ+rvo20eXb9Um1steaYY8xlxgBsXAgMBAAGjNTAzMA4G"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1UdDwEB/wQEAwIFoDATBgNVHSUEDDAKBggrBgEFBQcDATAMBgNVHRMBAf8EAjAA"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MA0GCSqGSIb3DQEBCwUAA4IBAQBUd9sGKYemzwPnxtw/vzkV8Q32NILEMlPVqeJU"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7UxVgIODBV6A1b3tOUoktuhmgSSaQxjhYbFAVTD+LUglMUCxNbj56luBRlLLQWo+"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9BUhC/ow393tLmqKcB59qNcwbZER6XT5POYwcaKM75QVqhCJVHJNb1zSEE7Co7iO"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6wIan3lFyjBfYlBEz5vyRWQNIwKfdh5cK1yAu13xGENwmtlSTHiwbjBLXfk+0A/8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r/2s+sCYUkGZHhj8xY7bJ1zg0FRalP5LrqY+r6BckT1QPDIQKYy615j1LpOtwZe/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d4q7MD/dkzRDsch7t2cIjM/PYeMuzh87admSyL6hdtK0Nm/Q"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----END CERTIFICATE-----"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----BEGIN RSA PRIVATE KEY-----"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MIIEowIBAAKCAQEArNj19HxUgoznppnZvVGzr3C3LRfeDseAaUnyft5SR8GW75zh"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bqOeloUCVq3JSqCJqf3Pb3i9SeAW7Wpt7FtwD5GVRCvVMUUOex0LsDs4VdBQ9tP9"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GBC6LvOU8J5E8OZfRlQl09NjRvqRpWLBa8XrFB6aI3ZfLSHJ9ddzOacqYAz1Zj3n"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jkUX+57HjAuhob12DOLcST8np6IcHoJfA2ejhORZElUecBULQIWzjTgJCFVZsNNN"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"itieqYrT7iRjpGvT8XAlVoZKP1viQhmqXAuzu+KWpcAVLlxNYh/iaZ6D4xqeKhNq"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IJ1t1h/7IEPq76NtHl2/VJtbLXmmGPMZcYAbFwIDAQABAoIBAFCgG4phfGIxK9Uw"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qrp+o9xQLYGhQnmOYb27OpwnRCYojSlT+mvLcqwvevnHsr9WxyA+PkZ3AYS2PLue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C4xW0pzQgdn8wENtPOX8lHkuBocw1rNsCwDwvIguIuliSjI8o3CAy+xVDFgNhWap"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/CMzfQYziB7GlnrM6hH838iiy0dlv4I/HKk+3/YlSYQEvnFokTf7HxbDDmznkJTM"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aPKZ5qbnV+4AcQfcLYJ8QE0ViJ8dVZ7RLwIf7+SG0b0bqloti4+oQXqGtiESUwEW"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Wzi7oyCbFJoPsFWp1P5+wD7jAGpAd9lPIwPahdr1wl6VwIx9W0XYjoZn71AEaw4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bK4xUXECgYEA3g2o9WqyrhYSax3pGEdvV2qN0VQhw7Xe+jyy98CELOO2DNbB9QNJ"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8cSSU/PjkxQlgbOJc8DEprdMldN5xI/srlsbQWCj72wXxXnVnh991bI2clwt7oYi"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pcGZwzCrJyFL+QaZmYzLxkxYl1tCiiuqLm+EkjxCWKTX/kKEFb6rtnMCgYEAx0WR"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L8Uue3lXxhXRdBS5QRTBNklkSxtU+2yyXRpvFa7Qam+GghJs5RKfJ9lTvjfM/PxG"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3vhuBliWQOKQbm1ZGLbgGBM505EOP7DikUmH/kzKxIeRo4l64mioKdDwK/4CZtS7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"az0Lq3eS6bq11qL4mEdE6Gn/Y+sqB83GHZYju80CgYABFm4KbbBcW+1RKv9WSBtK"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gVIagV/89moWLa/uuLmtApyEqZSfn5mAHqdc0+f8c2/Pl9KHh50u99zfKv8AsHfH"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TtjuVAvZg10GcZdTQ/I41ruficYL0gpfZ3haVWWxNl+J47di4iapXPxeGWtVA+u8"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eH1cvgDRMFWCgE7nUFzE8wKBgGndUomfZtdgGrp4ouLZk6W4ogD2MpsYNSixkXyW"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"64cIbV7uSvZVVZbJMtaXxb6bpIKOgBQ6xTEH5SMpenPAEgJoPVts816rhHdfwK5Q"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8zetklegckYAZtFbqmM0xjOI6bu5rqwFLWr1xo33jF0wDYPQ8RHMJkruB1FIB8V2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GxvNAoGBAM4g2z8NTPMqX+8IBGkGgqmcYuRQxd3cs7LOSEjF9hPy1it2ZFe/yUKq"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ePa2E8osffK5LBkFzhyQb0WrGC9ijM9E6rv10gyuNjlwXdFJcdqVamxwPUBtxRJR"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cYTY2HRkJXDdtT0Bkc3josE6UUDvwMpO0CfAETQPto1tjNEDhQhT"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-----END RSA PRIVATE KEY-----"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("usage")]),t._v(': "encipherment" | "verify" | "issue"')])]),t._v(" "),e("p",[t._v("The purpose of the certificate, the default value is "),e("code",[t._v('"encipherment"')]),t._v(".")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"encipherment"')]),t._v(": The certificate is used for TLS authentication and encryption.")]),t._v(" "),e("li",[e("code",[t._v('"verify"')]),t._v(": The certificate is used to verify the remote TLS certificate. When using this option, the current certificate must be a CA certificate.")]),t._v(" "),e("li",[e("code",[t._v('"issue"')]),t._v(": The certificate is used to issue other certificates. When using this option, the current certificate must be a CA certificate.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("On the Windows platform, a self-signed CA certificate can be installed in the system to verify the remote TLS certificate.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("When there is a new client request, assuming that the specified "),e("code",[t._v("serverName")]),t._v(" is "),e("code",[t._v('"v2ray.com"')]),t._v(", V2Ray will first look for a certificate that can be used for "),e("code",[t._v('"v2ray.com"')]),t._v(" from the certificate list. If it is not found, then Use any "),e("code",[t._v("usage")]),t._v(" to issue a certificate for "),e("code",[t._v('"v2ray.com"')]),t._v(" with a certificate for "),e("code",[t._v('"issue"')]),t._v(", valid for one hour. And add the new certificate to the certificate list for subsequent use.")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("certificateFile")]),t._v(": string")])]),t._v(" "),e("p",[t._v("The path of the certificate file, if it is generated using OpenSSL, the extension is .crt.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Use "),e("code",[t._v("v2ctl cert -ca")]),t._v(" to generate a self-signed CA certificate.")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("certificate")]),t._v(": [ string ]")])]),t._v(" "),e("p",[t._v("A string array representing the content of the certificate, the format is as shown in the sample. Choose one of "),e("code",[t._v("certificate")]),t._v(" and "),e("code",[t._v("certificateFile")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("keyFile")]),t._v(": string")])]),t._v(" "),e("p",[t._v("The path of the key file, if generated using OpenSSL, the suffix is .key. Currently, key files that require a password are not supported.")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("key")]),t._v(": [ string ]")])]),t._v(" "),e("p",[t._v("An array of strings, representing the key content, the format is as shown in the example. Choose one of "),e("code",[t._v("key")]),t._v(" and "),e("code",[t._v("keyFile")]),t._v(".")]),t._v(" "),e("p",[t._v("When "),e("code",[t._v("certificateFile")]),t._v(" and "),e("code",[t._v("certificate")]),t._v(" are specified at the same time, V2Ray preferentially uses "),e("code",[t._v("certificateFile")]),t._v(". The same goes for "),e("code",[t._v("keyFile")]),t._v(" and "),e("code",[t._v("key")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("When "),e("code",[t._v("usage")]),t._v(" is "),e("code",[t._v('"verify"')]),t._v(", both "),e("code",[t._v("keyFile")]),t._v(" and "),e("code",[t._v("key")]),t._v(" can be empty.")])]),t._v(" "),e("h2",{attrs:{id:"sockoptobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sockoptobject"}},[t._v("#")]),t._v(" SockoptObject")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mark"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tcpFastOpen"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tproxy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("mark")]),t._v(": number")])]),t._v(" "),e("p",[t._v("An integer. When its value is non-zero, mark SO_MARK on the outbound connection.")]),t._v(" "),e("ul",[e("li",[t._v("Only applicable to Linux systems.")]),t._v(" "),e("li",[t._v("Requires CAP_NET_ADMIN permission.")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("tcpFastOpen")]),t._v(": true | false")])]),t._v(" "),e("p",[t._v("Whether to enable "),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/TCP%E5%BF%AB%E9%80%9F%E6%89%93%E5%BC%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP Fast Open"),e("OutboundLink")],1),t._v(". When its value is "),e("code",[t._v("true")]),t._v(", TFO is forcibly turned on; when its value is "),e("code",[t._v("false")]),t._v(", TFO is forcibly turned off; when this item does not exist, the system default setting is used. Can be used for inbound and outbound connections.")]),t._v(" "),e("ul",[e("li",[t._v("Only available in the following versions (or later versions) of the operating system:\n"),e("ul",[e("li",[t._v("Windows 10 (1604)")]),t._v(" "),e("li",[t._v("Mac OS 10.11 / iOS 9")]),t._v(" "),e("li",[t._v("Linux 3.16: The system is turned on by default and no configuration is required.")])])])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("tproxy")]),t._v(': "redirect" | "tproxy" | "off"')])]),t._v(" "),e("p",[t._v("Whether to enable transparent proxy (only for Linux).")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('"redirect"')]),t._v(": Transparent proxy using Redirect mode. Only TCP/IPv4 and UDP connections are supported.")]),t._v(" "),e("li",[e("code",[t._v('"tproxy"')]),t._v(": Use TProxy mode transparent proxy. Supports TCP and UDP connections.")]),t._v(" "),e("li",[e("code",[t._v('"off"')]),t._v(": Turn off the transparent proxy.")])]),t._v(" "),e("p",[t._v("Transparent proxy requires Root or CAP_NET_ADMIN authority.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("When "),e("code",[t._v("followRedirect")]),t._v(" is specified in "),e("RouterLink",{attrs:{to:"/en_US/config/protocols/dokodemo.html"}},[t._v("Dokodemo-door")]),t._v(" and "),e("code",[t._v("sockopt.tproxy")]),t._v(" is empty, the value of "),e("code",[t._v("sockopt.tproxy")]),t._v(" will be set to "),e("code",[t._v('"redirect"')]),t._v(".")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);