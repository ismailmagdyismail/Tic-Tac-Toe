export function useCheckWinner(board){
    function checkHorizontal(){
        for (let i = 0 ;i<board.length;i++){
            const currentSymbol = board[i][0].symbol;
            let count = 0;
            for(let j = 0 ;j<board[0].length;j++){
                if(currentSymbol === board[i][j].symbol && currentSymbol!=='-'){
                    count++;
                }
            }
            if(count === board[i].length ){
                return true;
            }
        }
        return false;
    }
    function checkVertical(){
        for (let j = 0;j<board[0].length;j++){
            const currentSymbol = board[0][j].symbol;
            let count = 0;
            for(let i = 0 ;i<board.length;i++){
                if(currentSymbol === board[i][j].symbol && currentSymbol!=='-'){
                    count++;
                }
            }
            if(count === board[0].length ){
                return true;
            }
        }
        return false;
    }
    function checkDiagonal(){
        let i = 0;
        let j = 0 ;
        let currentSymbol = board[i][j].symbol;
        let count = 0 ;
        while (i<board.length && j<board[0].length){
            if(board[i][j].symbol === currentSymbol && currentSymbol !== '-'){
                count++;
            }
            i++;
            j++;
        }
        if(count === board.length){
            return true;
        }
        i = 0 ;
        j = board[0].length-1;
        count = 0  ;
        currentSymbol = board[i][j].symbol;
        while (i<board.length && j>=0){
            console.log(i,j,count);
            if(board[i][j].symbol === currentSymbol && currentSymbol !== '-'){
                count++;
            }
            i++;
            j--;
        }
        return count === board.length;
    }
    return checkHorizontal() || checkVertical() || checkDiagonal();
}

