function checkProbabilityTheory(count) {
  // ˳�������� ��� ������ �� �������� �����
  let evenCount = 0;
  let oddCount = 0;

  // ��������� �� ������� ���������� �����
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    // �������� �� ������� �� ��������� ��������� ��������
    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  // ��������� ����������
  console.log("ʳ������ ������������ �����:", count);
  console.log("������ �����:", evenCount);
  console.log("�������� �����:", oddCount);
  
  // ���������� �� ��������� ����������� ������������ ������ �� ��������
  const percentageEven = (evenCount / count) * 100;
  const percentageOdd = (oddCount / count) * 100;
  console.log("³������ ������ �� �� ������:", percentageEven.toFixed(2) + "%:" + percentageOdd.toFixed(2) + "%");
}

// ������� ������������
checkProbabilityTheory(1000);
