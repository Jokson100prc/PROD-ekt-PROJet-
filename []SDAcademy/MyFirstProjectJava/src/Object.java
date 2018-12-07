import javax.swing.JFrame;
import javax.swing.JLabel;

public class Object {
public static void main(String[] args) {
	JFrame window = new JFrame();
	window.setTitle("title");
	window.setSize(600,400);
	
	window.setVisible(true);
	
	JLabel label = new JLabel();
	label.setText("text");
	window.add(label);
}
}