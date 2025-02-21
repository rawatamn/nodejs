new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 2000);
      }),
    );
  }).then(()=>{console.log("amn")})
