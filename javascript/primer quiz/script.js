let tasaInteresAnual = 12;
    let numPagos = 12;

    let montoCredito = 150000;
    let interesMensual = tasaInteresAnual / 12 / 100;
    let cuotaMensual = montoCredito * interesMensual / (1 - Math.pow(1 + interesMensual, -numPagos));
    let totalPagado = cuotaMensual * numPagos;

    console.log("Tasa de interés (anual): " + tasaInteresAnual + "%");
    console.log("Número de pagos (mensuales): " + numPagos);
    console.log("Total pagado: " + totalPagado.toFixed(2));

    console.log("Tabla de amortización:");
    console.log("Pago\tValor Mensual\tValor\tCapital\tInterés\tTotal");

    let balance = montoCredito;
    let tabla = document.getElementById("tabla");
    for (let i = 1; i <= numPagos; i++) {
      let fila = tabla.insertRow();
      let pago = fila.insertCell(0);
      let valorMensual = fila.insertCell(1);
      let valor = fila.insertCell(2);
      let capital = fila.insertCell(3);
      let interes = fila.insertCell(4);
      let total = fila.insertCell(5);

      
      pago.innerHTML = i;
      valorMensual.innerHTML = cuotaMensual.toFixed(2);
      valor.innerHTML = balance.toFixed(2);
      let interesPago = balance * interesMensual;
      let principalPago = cuotaMensual - interesPago;
      capital.innerHTML = principalPago.toFixed(2);
      interes.innerHTML = interesPago.toFixed(2);
      total.innerHTML = totalPagado.toFixed(2);

      balance -= principalPago;

      console.log(i + "\t" + cuotaMensual.toFixed(2) + "\t\t" + balance.toFixed(2) + "\t" + principalPago.toFixed(2) + "\t" + interesPago.toFixed(2) + "\t" + totalPagado.toFixed(2));
    }

