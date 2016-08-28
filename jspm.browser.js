SystemJS.config({
  baseURL: ".",
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "app/": "src/"
  },
  bundles: {
    "temp/dev-bundle.js": [
      "dev-bundle.config.js",
      "github:capaj/systemjs-hot-reloader@0.6.0/hot-reloader.js",
      "github:capaj/systemjs-hot-reloader@0.6.0.json",
      "npm:debug@2.2.0/browser.js",
      "npm:debug@2.2.0.json",
      "npm:debug@2.2.0/debug.js",
      "npm:ms@0.7.1/index.js",
      "npm:ms@0.7.1.json",
      "npm:weakee@1.0.0/weakee.js",
      "npm:weakee@1.0.0.json",
      "github:socketio/socket.io-client@1.4.8/socket.io.js",
      "github:socketio/socket.io-client@1.4.8.json",
      "github:systemjs/plugin-css@0.1.27/css.js",
      "github:systemjs/plugin-css@0.1.27.json",
      "github:frankwallis/plugin-typescript@5.0.19/plugin.js",
      "github:frankwallis/plugin-typescript@5.0.19.json",
      "github:frankwallis/plugin-typescript@5.0.19/utils.js",
      "npm:typescript@2.0.0/lib/typescript.js",
      "npm:typescript@2.0.0.json",
      "npm:crypto-browserify@3.11.0/index.js",
      "npm:crypto-browserify@3.11.0.json",
      "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
      "github:jspm/nodelibs-process@0.2.0-alpha.json",
      "npm:public-encrypt@4.0.0/browser.js",
      "npm:public-encrypt@4.0.0.json",
      "npm:public-encrypt@4.0.0/privateDecrypt.js",
      "github:jspm/nodelibs-buffer@0.2.0-alpha/global.js",
      "github:jspm/nodelibs-buffer@0.2.0-alpha.json",
      "npm:buffer@4.9.1/index.js",
      "npm:buffer@4.9.1.json",
      "npm:isarray@1.0.0/index.js",
      "npm:isarray@1.0.0.json",
      "npm:ieee754@1.1.6/index.js",
      "npm:ieee754@1.1.6.json",
      "npm:base64-js@1.1.2/lib/b64.js",
      "npm:base64-js@1.1.2.json",
      "npm:public-encrypt@4.0.0/withPublic.js",
      "npm:bn.js@4.11.6/lib/bn.js",
      "npm:bn.js@4.11.6.json",
      "npm:create-hash@1.1.2/browser.js",
      "npm:create-hash@1.1.2.json",
      "npm:cipher-base@1.0.2/index.js",
      "npm:cipher-base@1.0.2.json",
      "npm:string_decoder@0.10.31/index.js",
      "npm:string_decoder@0.10.31.json",
      "github:jspm/nodelibs-string_decoder@0.2.0-alpha.json",
      "npm:inherits@2.0.1/inherits_browser.js",
      "npm:inherits@2.0.1.json",
      "npm:stream-browserify@2.0.1/index.js",
      "npm:stream-browserify@2.0.1.json",
      "npm:readable-stream@2.1.5/passthrough.js",
      "npm:readable-stream@2.1.5.json",
      "npm:readable-stream@2.1.5/lib/_stream_passthrough.js",
      "npm:core-util-is@1.0.2/lib/util.js",
      "npm:core-util-is@1.0.2.json",
      "npm:readable-stream@2.1.5/lib/_stream_transform.js",
      "npm:readable-stream@2.1.5/lib/_stream_duplex.js",
      "npm:readable-stream@2.1.5/lib/_stream_writable.js",
      "npm:buffer-shims@1.0.0/index.js",
      "npm:buffer-shims@1.0.0.json",
      "github:jspm/nodelibs-events@0.2.0-alpha/events.js",
      "github:jspm/nodelibs-events@0.2.0-alpha.json",
      "npm:util-deprecate@1.0.2/browser.js",
      "npm:util-deprecate@1.0.2.json",
      "npm:process-nextick-args@1.0.7/index.js",
      "npm:process-nextick-args@1.0.7.json",
      "npm:readable-stream@2.1.5/lib/_stream_readable.js",
      "npm:readable-stream@2.1.5/lib/internal/streams/BufferList.js",
      "npm:readable-stream@2.1.5/transform.js",
      "npm:readable-stream@2.1.5/duplex.js",
      "npm:readable-stream@2.1.5/writable.js",
      "npm:readable-stream@2.1.5/readable.js",
      "github:jspm/nodelibs-stream@0.2.0-alpha.json",
      "npm:sha.js@2.4.5/index.js",
      "npm:sha.js@2.4.5.json",
      "npm:sha.js@2.4.5/sha512.js",
      "npm:sha.js@2.4.5/hash.js",
      "npm:sha.js@2.4.5/sha384.js",
      "npm:sha.js@2.4.5/sha256.js",
      "npm:sha.js@2.4.5/sha224.js",
      "npm:sha.js@2.4.5/sha1.js",
      "npm:sha.js@2.4.5/sha.js",
      "npm:ripemd160@1.0.1/lib/ripemd160.js",
      "npm:ripemd160@1.0.1.json",
      "npm:create-hash@1.1.2/md5.js",
      "npm:create-hash@1.1.2/helpers.js",
      "npm:browserify-rsa@4.0.1/index.js",
      "npm:browserify-rsa@4.0.1.json",
      "npm:randombytes@2.0.3/browser.js",
      "npm:randombytes@2.0.3.json",
      "npm:public-encrypt@4.0.0/xor.js",
      "npm:public-encrypt@4.0.0/mgf.js",
      "npm:parse-asn1@5.0.0/index.js",
      "npm:parse-asn1@5.0.0.json",
      "npm:pbkdf2@3.0.4/browser.js",
      "npm:pbkdf2@3.0.4.json",
      "npm:create-hmac@1.1.4/browser.js",
      "npm:create-hmac@1.1.4.json",
      "npm:browserify-aes@1.0.6/browser.js",
      "npm:browserify-aes@1.0.6.json",
      "npm:browserify-aes@1.0.6/modes.js",
      "npm:browserify-aes@1.0.6/decrypter.js",
      "npm:browserify-aes@1.0.6/modes/ctr.js",
      "npm:buffer-xor@1.0.3/index.js",
      "npm:buffer-xor@1.0.3.json",
      "npm:browserify-aes@1.0.6/modes/ofb.js",
      "npm:browserify-aes@1.0.6/modes/cfb1.js",
      "npm:browserify-aes@1.0.6/modes/cfb8.js",
      "npm:browserify-aes@1.0.6/modes/cfb.js",
      "npm:browserify-aes@1.0.6/modes/cbc.js",
      "npm:browserify-aes@1.0.6/modes/ecb.js",
      "npm:evp_bytestokey@1.0.0/index.js",
      "npm:evp_bytestokey@1.0.0.json",
      "npm:browserify-aes@1.0.6/authCipher.js",
      "npm:browserify-aes@1.0.6/ghash.js",
      "npm:browserify-aes@1.0.6/aes.js",
      "npm:browserify-aes@1.0.6/streamCipher.js",
      "npm:browserify-aes@1.0.6/encrypter.js",
      "npm:parse-asn1@5.0.0/fixProc.js",
      "npm:parse-asn1@5.0.0/aesid.json",
      "npm:parse-asn1@5.0.0/asn1.js",
      "npm:asn1.js@4.8.0/lib/asn1.js",
      "npm:asn1.js@4.8.0.json",
      "npm:asn1.js@4.8.0/lib/asn1/encoders/index.js",
      "npm:asn1.js@4.8.0/lib/asn1/encoders/pem.js",
      "npm:asn1.js@4.8.0/lib/asn1/encoders/der.js",
      "npm:asn1.js@4.8.0/lib/asn1/decoders/index.js",
      "npm:asn1.js@4.8.0/lib/asn1/decoders/pem.js",
      "npm:asn1.js@4.8.0/lib/asn1/decoders/der.js",
      "npm:asn1.js@4.8.0/lib/asn1/constants/index.js",
      "npm:asn1.js@4.8.0/lib/asn1/constants/der.js",
      "npm:asn1.js@4.8.0/lib/asn1/base/index.js",
      "npm:asn1.js@4.8.0/lib/asn1/base/node.js",
      "npm:minimalistic-assert@1.0.0/index.js",
      "npm:minimalistic-assert@1.0.0.json",
      "npm:asn1.js@4.8.0/lib/asn1/base/buffer.js",
      "npm:asn1.js@4.8.0/lib/asn1/base/reporter.js",
      "npm:asn1.js@4.8.0/lib/asn1/api.js",
      "github:jspm/nodelibs-vm@0.2.0-alpha/vm.js",
      "github:jspm/nodelibs-vm@0.2.0-alpha.json",
      "npm:public-encrypt@4.0.0/publicEncrypt.js",
      "npm:create-ecdh@4.0.0/browser.js",
      "npm:create-ecdh@4.0.0.json",
      "npm:elliptic@6.3.1/lib/elliptic.js",
      "npm:elliptic@6.3.1.json",
      "npm:elliptic@6.3.1/lib/elliptic/eddsa/index.js",
      "npm:elliptic@6.3.1/lib/elliptic/eddsa/signature.js",
      "npm:elliptic@6.3.1/lib/elliptic/eddsa/key.js",
      "npm:hash.js@1.0.3/lib/hash.js",
      "npm:hash.js@1.0.3.json",
      "npm:hash.js@1.0.3/lib/hash/hmac.js",
      "npm:hash.js@1.0.3/lib/hash/ripemd.js",
      "npm:hash.js@1.0.3/lib/hash/sha.js",
      "npm:hash.js@1.0.3/lib/hash/common.js",
      "npm:hash.js@1.0.3/lib/hash/utils.js",
      "npm:elliptic@6.3.1/lib/elliptic/ec/index.js",
      "npm:elliptic@6.3.1/lib/elliptic/ec/signature.js",
      "npm:elliptic@6.3.1/lib/elliptic/ec/key.js",
      "npm:elliptic@6.3.1/lib/elliptic/curves.js",
      "npm:elliptic@6.3.1/lib/elliptic/precomputed/secp256k1.js",
      "npm:elliptic@6.3.1/lib/elliptic/curve/index.js",
      "npm:elliptic@6.3.1/lib/elliptic/curve/edwards.js",
      "npm:elliptic@6.3.1/lib/elliptic/curve/mont.js",
      "npm:elliptic@6.3.1/lib/elliptic/curve/short.js",
      "npm:elliptic@6.3.1/lib/elliptic/curve/base.js",
      "npm:elliptic@6.3.1/lib/elliptic/hmac-drbg.js",
      "npm:brorand@1.0.5/index.js",
      "npm:brorand@1.0.5.json",
      "npm:elliptic@6.3.1/lib/elliptic/utils.js",
      "npm:elliptic@6.3.1/package.json",
      "npm:browserify-sign@4.0.0/browser.js",
      "npm:browserify-sign@4.0.0.json",
      "npm:browserify-sign@4.0.0/verify.js",
      "npm:browserify-sign@4.0.0/curves.js",
      "npm:browserify-sign@4.0.0/sign.js",
      "npm:browserify-sign@4.0.0/algos.js",
      "npm:diffie-hellman@5.0.2/browser.js",
      "npm:diffie-hellman@5.0.2.json",
      "npm:diffie-hellman@5.0.2/lib/dh.js",
      "npm:diffie-hellman@5.0.2/lib/generatePrime.js",
      "npm:miller-rabin@4.0.0/lib/mr.js",
      "npm:miller-rabin@4.0.0.json",
      "npm:diffie-hellman@5.0.2/lib/primes.json",
      "npm:browserify-cipher@1.0.0/browser.js",
      "npm:browserify-cipher@1.0.0.json",
      "npm:browserify-des@1.0.0/modes.js",
      "npm:browserify-des@1.0.0.json",
      "npm:browserify-des@1.0.0/index.js",
      "npm:des.js@1.0.0/lib/des.js",
      "npm:des.js@1.0.0.json",
      "npm:des.js@1.0.0/lib/des/ede.js",
      "npm:des.js@1.0.0/lib/des/cbc.js",
      "npm:des.js@1.0.0/lib/des/des.js",
      "npm:des.js@1.0.0/lib/des/cipher.js",
      "npm:des.js@1.0.0/lib/des/utils.js",
      "github:jspm/nodelibs-crypto@0.2.0-alpha.json",
      "npm:os-browserify@0.2.1/browser.js",
      "npm:os-browserify@0.2.1.json",
      "github:jspm/nodelibs-os@0.2.0-alpha.json",
      "github:frankwallis/plugin-typescript@5.0.19/format-errors.js",
      "github:frankwallis/plugin-typescript@5.0.19/factory.js",
      "github:frankwallis/plugin-typescript@5.0.19/type-checker.js",
      "github:frankwallis/plugin-typescript@5.0.19/compiler-host.js",
      "github:frankwallis/plugin-typescript@5.0.19/logger.js",
      "github:frankwallis/plugin-typescript@5.0.19/resolver.js",
      "github:frankwallis/plugin-typescript@5.0.19/transpiler.js",
      "npm:react-dom@15.3.1/index.js",
      "npm:react-dom@15.3.1.json",
      "npm:react@15.3.1/lib/ReactDOM.js",
      "npm:react@15.3.1.json",
      "npm:react@15.3.1/lib/ReactDOMNullInputValuePropHook.js",
      "npm:fbjs@0.8.4/lib/warning.js",
      "npm:fbjs@0.8.4.json",
      "npm:fbjs@0.8.4/lib/emptyFunction.js",
      "npm:react@15.3.1/lib/ReactComponentTreeHook.js",
      "npm:fbjs@0.8.4/lib/invariant.js",
      "npm:react@15.3.1/lib/ReactCurrentOwner.js",
      "npm:react@15.3.1/lib/reactProdInvariant.js",
      "npm:react@15.3.1/lib/ReactDOMUnknownPropertyHook.js",
      "npm:react@15.3.1/lib/EventPluginRegistry.js",
      "npm:react@15.3.1/lib/DOMProperty.js",
      "npm:react@15.3.1/lib/ReactInstrumentation.js",
      "npm:react@15.3.1/lib/ReactDebugTool.js",
      "npm:fbjs@0.8.4/lib/performanceNow.js",
      "npm:fbjs@0.8.4/lib/performance.js",
      "npm:fbjs@0.8.4/lib/ExecutionEnvironment.js",
      "npm:react@15.3.1/lib/ReactChildrenMutationWarningHook.js",
      "npm:react@15.3.1/lib/ReactHostOperationHistoryHook.js",
      "npm:react@15.3.1/lib/ReactInvalidSetStateWarningHook.js",
      "npm:react@15.3.1/lib/renderSubtreeIntoContainer.js",
      "npm:react@15.3.1/lib/ReactMount.js",
      "npm:react@15.3.1/lib/shouldUpdateReactComponent.js",
      "npm:react@15.3.1/lib/setInnerHTML.js",
      "npm:react@15.3.1/lib/createMicrosoftUnsafeLocalFunction.js",
      "npm:react@15.3.1/lib/DOMNamespaces.js",
      "npm:react@15.3.1/lib/instantiateReactComponent.js",
      "npm:react@15.3.1/lib/ReactHostComponent.js",
      "npm:object-assign@4.1.0/index.js",
      "npm:object-assign@4.1.0.json",
      "npm:react@15.3.1/lib/ReactEmptyComponent.js",
      "npm:react@15.3.1/lib/ReactCompositeComponent.js",
      "npm:fbjs@0.8.4/lib/shallowEqual.js",
      "npm:fbjs@0.8.4/lib/emptyObject.js",
      "npm:react@15.3.1/lib/checkReactTypeSpec.js",
      "npm:react@15.3.1/lib/ReactPropTypesSecret.js",
      "npm:react@15.3.1/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.3.1/lib/ReactReconciler.js",
      "npm:react@15.3.1/lib/ReactRef.js",
      "npm:react@15.3.1/lib/ReactOwner.js",
      "npm:react@15.3.1/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.8.4/lib/keyMirror.js",
      "npm:react@15.3.1/lib/ReactNodeTypes.js",
      "npm:react@15.3.1/lib/ReactElement.js",
      "npm:react@15.3.1/lib/canDefineProperty.js",
      "npm:react@15.3.1/lib/ReactInstanceMap.js",
      "npm:react@15.3.1/lib/ReactErrorUtils.js",
      "npm:react@15.3.1/lib/ReactComponentEnvironment.js",
      "npm:react@15.3.1/lib/ReactUpdates.js",
      "npm:react@15.3.1/lib/Transaction.js",
      "npm:react@15.3.1/lib/ReactFeatureFlags.js",
      "npm:react@15.3.1/lib/PooledClass.js",
      "npm:react@15.3.1/lib/CallbackQueue.js",
      "npm:react@15.3.1/lib/ReactUpdateQueue.js",
      "npm:react@15.3.1/lib/ReactMarkupChecksum.js",
      "npm:react@15.3.1/lib/adler32.js",
      "npm:react@15.3.1/lib/ReactDOMFeatureFlags.js",
      "npm:react@15.3.1/lib/ReactDOMContainerInfo.js",
      "npm:react@15.3.1/lib/validateDOMNesting.js",
      "npm:react@15.3.1/lib/ReactDOMComponentTree.js",
      "npm:react@15.3.1/lib/ReactDOMComponentFlags.js",
      "npm:react@15.3.1/lib/ReactBrowserEventEmitter.js",
      "npm:react@15.3.1/lib/isEventSupported.js",
      "npm:react@15.3.1/lib/getVendorPrefixedEventName.js",
      "npm:react@15.3.1/lib/ViewportMetrics.js",
      "npm:react@15.3.1/lib/ReactEventEmitterMixin.js",
      "npm:react@15.3.1/lib/EventPluginHub.js",
      "npm:react@15.3.1/lib/forEachAccumulated.js",
      "npm:react@15.3.1/lib/accumulateInto.js",
      "npm:react@15.3.1/lib/EventPluginUtils.js",
      "npm:react@15.3.1/lib/EventConstants.js",
      "npm:react@15.3.1/lib/DOMLazyTree.js",
      "npm:react@15.3.1/lib/setTextContent.js",
      "npm:react@15.3.1/lib/escapeTextContentForBrowser.js",
      "npm:react@15.3.1/lib/getHostComponentFromComposite.js",
      "npm:react@15.3.1/lib/findDOMNode.js",
      "npm:react@15.3.1/lib/ReactVersion.js",
      "npm:react@15.3.1/lib/ReactDefaultInjection.js",
      "npm:react@15.3.1/lib/SimpleEventPlugin.js",
      "npm:fbjs@0.8.4/lib/keyOf.js",
      "npm:react@15.3.1/lib/getEventCharCode.js",
      "npm:react@15.3.1/lib/SyntheticWheelEvent.js",
      "npm:react@15.3.1/lib/SyntheticMouseEvent.js",
      "npm:react@15.3.1/lib/getEventModifierState.js",
      "npm:react@15.3.1/lib/SyntheticUIEvent.js",
      "npm:react@15.3.1/lib/getEventTarget.js",
      "npm:react@15.3.1/lib/SyntheticEvent.js",
      "npm:react@15.3.1/lib/SyntheticTransitionEvent.js",
      "npm:react@15.3.1/lib/SyntheticTouchEvent.js",
      "npm:react@15.3.1/lib/SyntheticDragEvent.js",
      "npm:react@15.3.1/lib/SyntheticKeyboardEvent.js",
      "npm:react@15.3.1/lib/getEventKey.js",
      "npm:react@15.3.1/lib/SyntheticFocusEvent.js",
      "npm:react@15.3.1/lib/SyntheticClipboardEvent.js",
      "npm:react@15.3.1/lib/SyntheticAnimationEvent.js",
      "npm:react@15.3.1/lib/EventPropagators.js",
      "npm:fbjs@0.8.4/lib/EventListener.js",
      "npm:react@15.3.1/lib/SelectEventPlugin.js",
      "npm:react@15.3.1/lib/isTextInputElement.js",
      "npm:fbjs@0.8.4/lib/getActiveElement.js",
      "npm:react@15.3.1/lib/ReactInputSelection.js",
      "npm:fbjs@0.8.4/lib/focusNode.js",
      "npm:fbjs@0.8.4/lib/containsNode.js",
      "npm:fbjs@0.8.4/lib/isTextNode.js",
      "npm:fbjs@0.8.4/lib/isNode.js",
      "npm:react@15.3.1/lib/ReactDOMSelection.js",
      "npm:react@15.3.1/lib/getTextContentAccessor.js",
      "npm:react@15.3.1/lib/getNodeForCharacterOffset.js",
      "npm:react@15.3.1/lib/SVGDOMPropertyConfig.js",
      "npm:react@15.3.1/lib/ReactReconcileTransaction.js",
      "npm:react@15.3.1/lib/ReactInjection.js",
      "npm:react@15.3.1/lib/ReactClass.js",
      "npm:react@15.3.1/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.3.1/lib/ReactComponent.js",
      "npm:react@15.3.1/lib/ReactEventListener.js",
      "npm:fbjs@0.8.4/lib/getUnboundedScrollPosition.js",
      "npm:react@15.3.1/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@15.3.1/lib/ReactDOMTextComponent.js",
      "npm:react@15.3.1/lib/DOMChildrenOperations.js",
      "npm:react@15.3.1/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@15.3.1/lib/Danger.js",
      "npm:fbjs@0.8.4/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.8.4/lib/getMarkupWrap.js",
      "npm:fbjs@0.8.4/lib/createArrayFromMixed.js",
      "npm:react@15.3.1/lib/ReactDOMTreeTraversal.js",
      "npm:react@15.3.1/lib/ReactDOMEmptyComponent.js",
      "npm:react@15.3.1/lib/ReactDOMComponent.js",
      "npm:react@15.3.1/lib/ReactServerRenderingTransaction.js",
      "npm:react@15.3.1/lib/ReactServerUpdateQueue.js",
      "npm:react@15.3.1/lib/ReactMultiChild.js",
      "npm:react@15.3.1/lib/flattenChildren.js",
      "npm:react@15.3.1/lib/traverseAllChildren.js",
      "npm:react@15.3.1/lib/KeyEscapeUtils.js",
      "npm:react@15.3.1/lib/getIteratorFn.js",
      "npm:react@15.3.1/lib/ReactChildReconciler.js",
      "npm:react@15.3.1/lib/ReactDOMTextarea.js",
      "npm:react@15.3.1/lib/LinkedValueUtils.js",
      "npm:react@15.3.1/lib/ReactPropTypes.js",
      "npm:react@15.3.1/lib/DisabledInputUtils.js",
      "npm:react@15.3.1/lib/ReactDOMSelect.js",
      "npm:react@15.3.1/lib/ReactDOMOption.js",
      "npm:react@15.3.1/lib/ReactChildren.js",
      "npm:react@15.3.1/lib/ReactDOMInput.js",
      "npm:react@15.3.1/lib/DOMPropertyOperations.js",
      "npm:react@15.3.1/lib/quoteAttributeValueForBrowser.js",
      "npm:react@15.3.1/lib/ReactDOMButton.js",
      "npm:react@15.3.1/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.8.4/lib/memoizeStringOnly.js",
      "npm:fbjs@0.8.4/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.4/lib/hyphenate.js",
      "npm:react@15.3.1/lib/dangerousStyleValue.js",
      "npm:react@15.3.1/lib/CSSProperty.js",
      "npm:fbjs@0.8.4/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.4/lib/camelize.js",
      "npm:react@15.3.1/lib/AutoFocusUtils.js",
      "npm:react@15.3.1/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@15.3.1/lib/ReactDOMIDOperations.js",
      "npm:react@15.3.1/lib/HTMLDOMPropertyConfig.js",
      "npm:react@15.3.1/lib/EnterLeaveEventPlugin.js",
      "npm:react@15.3.1/lib/DefaultEventPluginOrder.js",
      "npm:react@15.3.1/lib/ChangeEventPlugin.js",
      "npm:react@15.3.1/lib/BeforeInputEventPlugin.js",
      "npm:react@15.3.1/lib/SyntheticInputEvent.js",
      "npm:react@15.3.1/lib/SyntheticCompositionEvent.js",
      "npm:react@15.3.1/lib/FallbackCompositionState.js",
      "npm:react@15.3.1/react.js",
      "npm:react@15.3.1/lib/React.js",
      "npm:react@15.3.1/lib/ReactElementValidator.js",
      "npm:react@15.3.1/lib/onlyChild.js",
      "npm:react@15.3.1/lib/ReactDOMFactories.js",
      "npm:react@15.3.1/lib/ReactPureComponent.js"
    ]
  }
});
