public class Ex2 {

	public static void main(String[] args) {
		/*
		 * 2차원 배열
		 * - 1차원 배열들의 집합
		 *   => 행열의 형태와 비슷한 구조
		 *   => 실제 데이터는 열에 해당하는 공간에 저장되며
		 *      열의 메모리 주소를 행이 관리한다.
		 *      또한, 행의 메모리 주소를 배열 변수가 관리한다.
		 * - 행 크기 : 배열명.length
		 *   열 크기 : 배열명[행번호].length 
		 * 
		 * < 기본 문법 >
		 * 데이터타입[][] 변수명 = new 데이터타입[행크기][열크기];
		 * 변수명[행번호][열번호] = 데이터;
		 * 
		 */
		
		// 2행 3열의 정수를 저장하는 2차원 배열 생성
		int[][] arr = new int[2][3];
		
		arr[0][0] = 1;
		arr[0][1] = 2;
		arr[0][2] = 3;
//		arr[0][3] = 4; // 열크기가 3열이므로, 0 ~ 2번까지만 열번호가 존재
		
		arr[1][0] = 4;
		arr[1][1] = 5;
		arr[1][2] = 6;
		
//		arr[2][0] = 7; // 행크기가 2행이므로, 0 ~ 1번까지만 행번호가 존재
		
		System.out.println(arr[0][0] + " " + arr[0][1] + " " + arr[0][2]);
		System.out.println(arr[1][0] + " " + arr[1][1] + " " + arr[1][2]);
		
		System.out.println("arr 배열의 행크기 : " + arr.length);
		System.out.println("arr 배열 0번 행의 열크기 : " + arr[0].length);
		System.out.println("arr 배열 1번 행의 열크기 : " + arr[1].length);
		
	}

}

