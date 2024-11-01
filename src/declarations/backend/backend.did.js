export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getTranslation' : IDL.Func([], [IDL.Text], ['query']),
    'storeTranslation' : IDL.Func([IDL.Text], [], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
