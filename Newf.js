function pad(str, char, length, addToStart) {
  // ��������, �� ������� �������� �������
  if (length <= str.length) {
    return str;
  }

  // ���������� ������� ������� ��� ���������
  const padLength = length - str.length;

  // ��������� ����� � ��������� ��� ���������
  const padChars = char.repeat(padLength);

  // ��������� ������� �� ������� ��� ���� �����
  return addToStart ? padChars + str : str + padChars;
}
